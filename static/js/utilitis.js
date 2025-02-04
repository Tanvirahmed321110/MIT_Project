// Open Modal Function
export function openModalF(modalId, btnSelector) {
    const modal = document.getElementById(modalId)
    const btns = document.querySelectorAll(btnSelector)


    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            modal.classList.add('active')
        })
    })
}


// close button funciton
export function closeButtonF() {
    const closeButtons = document.querySelectorAll('.modal-close-btn');

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const modal = btn.closest('.my-modal, .all-category'); // Selects the closest matching element

            if (modal) { // Check if a matching ancestor exists
                modal.classList.remove('active');
            }
        });
    });
}



// Sidebar toggle function
export function toggleF(sidebarId, buttonId) {
    const sidebar = document.getElementById(sidebarId);
    const toggleBtn = document.getElementById(buttonId);
    const closeBtn = document.getElementById('close-mobile-sidebar')

    if (!sidebar || !toggleBtn) {
        console.error('Sidebar or Button not found. Check your IDs.');
        return;
    }

    // Add event listener to the button
    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        toggleBtn.classList.toggle('active');

    });

    if (closeBtn) {
        // close menu icon
        closeBtn.addEventListener('click', function () {
            if (sidebar.classList.contains('active')) {
                toggleBtn.classList.remove('active')
            }
            else {
                toggleBtn.classList.add('active')
            }
        })
    }
}



// update qty
function updateQty() {
    const inputQuantity = document.getElementById('input-quantity')

    if (inputQuantity) {
        document.getElementById('plus-btn').addEventListener('click', function () {
            updateQuantity(inputQuantity, 'increment')
            console.log('click')
        })
        document.getElementById('minus-btn').addEventListener('click', function () {
            updateQuantity(inputQuantity, 'decrement')
        })
    }
}
updateQty()





// Base function for updating quantity
export function updateQuantity(inputField, operation) {
    let currentValue = parseInt(inputField.value) || 0;

    // Increment or decrement based on the operation
    if (operation === 'increment' && currentValue < 9) {
        inputField.value = currentValue + 1;
    } else if (operation === 'decrement' && currentValue > 1) {
        inputField.value = currentValue - 1;
    }
}




// setup quantity
function setupQuantityButtons() {
    const allCartItems = document.querySelectorAll('.shopping-cart-modal .item');

    allCartItems.forEach((item) => {
        const plusButton = item.querySelector('.plus-btn');
        const minusButton = item.querySelector('.minus-btn');
        const inputField = item.querySelector('.input-field');

        // Add event listener for the plus button
        plusButton.addEventListener('click', function () {
            updateQuantity(inputField, 'increment');
        });

        // Add event listener for the minus button
        minusButton.addEventListener('click', function () {
            updateQuantity(inputField, 'decrement');
        });
    });

}

// Call setupQuantityButtons
setupQuantityButtons();




// Search Dropdown
export function openSearchDropdown() {
    const input = document.getElementById('search-input')
    const dropdwon = document.getElementById('search-dropdown')
    const relatedItem = document.querySelector('.search-dropdown .related-items');

    const history = document.querySelector('.search-dropdown .history');

    input.addEventListener('focus', function () {
        dropdwon.classList.add('active')
        history.classList.add('active');
    })

    input.addEventListener('input', function () {
        if (input.value.trim() !== '') {
            if (history) {
                history.classList.remove('active');
            }
            relatedItem.classList.add('active');

        } else {
            relatedItem.classList.remove('active');
            history.classList.add('active');
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInside = dropdwon.contains(event.target) || input.contains(event.target);
        if (!isClickInside) {
            dropdwon.classList.remove('active'); // Close dropdown
            if (history) {
                history.classList.remove('active');
            }
            if (relatedItem) {
                relatedItem.classList.remove('active');
            }
        }

    });
}




// delete function
export function deleteF(itemClass, btnsClass) {
    const items = document.querySelectorAll(itemClass)
    const btns = document.querySelectorAll(btnsClass)

    if (btns.length === 0 || items.length === 0) {
        console.error("No items or buttons found with the provided selectors.");
        return;
    }

    btns.forEach((btn, index) => {
        btn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent any default behavior (if needed)
            event.stopPropagation();

            if (items[index]) {
                items[index].remove();
            } else {
                console.warn("No corresponding item found for this button.");
            }
        })
    })
}

deleteF('.shopping-cart-modal .item', '.shopping-cart-modal .delete-btn')





// funciton active
export function activeF(selector) {
    const items = document.querySelectorAll(selector)

    items.forEach(item => {
        item.addEventListener('click', function () {
            items.forEach(single => {
                single.classList.remove('active')
            })
            item.classList.add('active')
        })
    })
}







// doropdown
function dropdwonToggle(wrapperId) {
    const wrapper = document.getElementById(wrapperId)
    // const dropdowns = wrapper.querySelectorAll('.dropdwon')

    if (wrapper) {
        const btns = wrapper.querySelectorAll('.nav-btn')

        btns.forEach((btn, index) => {
            btn.addEventListener('click', function () {
                const dropdown = btn.querySelector('.dropdown');
                const icon = btn.querySelector('span')


                // Close all other dropdowns
                btns.forEach(otherBtn => {
                    const otherDropdown = otherBtn.querySelector('.dropdown')
                    const otherIcon = otherBtn.querySelector('span')

                    if (otherDropdown != dropdown) {
                        otherDropdown.classList.remove('active')
                        otherIcon.classList.remove('active')
                    }
                })

                if (dropdown) {
                    // Toggle the 'active' class on the dropdown
                    dropdown.classList.toggle('active');
                    icon.classList.toggle('active')
                }
            })
        })
    }
}


dropdwonToggle('category-sticky')



const allCategoryClose = document.getElementById('all-category-close');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');

// Listen for a click event on the 'all-category-close' button
allCategoryClose.addEventListener('click', function () {
    // Remove the 'active' class from the mobile menu icon when the category close button is clicked
    mobileMenuIcon.classList.remove('active');
});
