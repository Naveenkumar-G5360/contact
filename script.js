// Sample contact data with Tamil names
const dummyContacts = [
    {
        id: 1,
        firstName: "Karthik",
        lastName: "Rajan",
        email: "karthik.rajan@email.com",
        phone: "944-555-0101",
        address: "123 Anna Nagar, Chennai, Tamil Nadu",
        notes: "Software Engineer"
    },
    {
        id: 2,
        firstName: "Priya",
        lastName: "Sundaram",
        email: "priya.s@email.com",
        phone: "955-666-0202",
        address: "45 T Nagar, Chennai, Tamil Nadu",
        notes: "Project Manager"
    },
    {
        id: 3,
        firstName: "Senthil",
        lastName: "Kumar",
        email: "senthil.k@email.com",
        phone: "966-777-0303",
        address: "78 KK Nagar, Chennai, Tamil Nadu",
        notes: "Business Analyst"
    },
    {
        id: 4,
        firstName: "Lakshmi",
        lastName: "Narayanan",
        email: "lakshmi.n@email.com",
        phone: "977-888-0404",
        address: "90 Adyar, Chennai, Tamil Nadu",
        notes: "Team Lead"
    },
    {
        id: 5,
        firstName: "Ramesh",
        lastName: "Krishnan",
        email: "ramesh.k@email.com",
        phone: "988-999-0505",
        address: "34 Velachery, Chennai, Tamil Nadu",
        notes: "Senior Developer"
    },
    {
        id: 6,
        firstName: "Meena",
        lastName: "Kumari",
        email: "meena.k@email.com",
        phone: "999-000-0606",
        address: "56 Tambaram, Chennai, Tamil Nadu",
        notes: "UI Designer"
    },
    {
        id: 7,
        firstName: "Arun",
        lastName: "Prakash",
        email: "arun.p@email.com",
        phone: "900-111-0707",
        address: "89 Porur, Chennai, Tamil Nadu",
        notes: "System Architect"
    },
    {
        id: 8,
        firstName: "Kavitha",
        lastName: "Murugan",
        email: "kavitha.m@email.com",
        phone: "911-222-0808",
        address: "12 Guindy, Chennai, Tamil Nadu",
        notes: "Database Admin"
    },
    {
        id: 9,
        firstName: "Rajesh",
        lastName: "Venkatesh",
        email: "rajesh.v@email.com",
        phone: "922-333-0909",
        address: "67 Chromepet, Chennai, Tamil Nadu",
        notes: "QA Engineer"
    },
    {
        id: 10,
        firstName: "Anitha",
        lastName: "Palani",
        email: "anitha.p@email.com",
        phone: "933-444-1010",
        address: "23 Pallavaram, Chennai, Tamil Nadu",
        notes: "Product Manager"
    }
];

// Function to load all contacts
async function loadContacts() {
    try {
        // For demonstration, using dummy data instead of API call
        displayContacts(dummyContacts);
    } catch (error) {
        console.error('Error loading contacts:', error);
    }
}

// Function to display contacts in a table format
function displayContacts(contacts) {
    const container = document.getElementById('contactsContainer');
    container.innerHTML = `
        <table class="contact-table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Notes</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    `;

    const tbody = container.querySelector('tbody');

    contacts.forEach((contact, index) => {
        const row = document.createElement('tr');
        row.className = 'contact-row';
        row.style.animationDelay = `${index * 0.1}s`;
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td title="${contact.firstName} ${contact.lastName}">${contact.firstName} ${contact.lastName}</td>
            <td title="${contact.email}">${contact.email}</td>
            <td title="${contact.phone}">${contact.phone}</td>
            <td title="${contact.address}">${contact.address}</td>
            <td title="${contact.notes || 'N/A'}">${contact.notes || 'N/A'}</td>
            <td class="action-buttons">
                <button class="edit-btn" onclick="editContact(${contact.id})">Edit</button>
                <button class="delete-btn" onclick="deleteContact(${contact.id})">Del</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Function to add a new contact
async function addContact(event) {
    event.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        notes: document.getElementById('notes').value
    };

    try {
        // For demonstration, just show alert
        alert('Contact added successfully!');
        window.location.href = 'view.html';
    } catch (error) {
        console.error('Error:', error);
        alert('Error adding contact');
    }
}

// Function to edit a contact
function editContact(id) {
    const contact = dummyContacts.find(c => c.id === id);
    if (contact) {
        // Store contact data in localStorage for edit page
        localStorage.setItem('editContact', JSON.stringify(contact));
        window.location.href = 'edit.html';
    }
}

// Function to load contact data for editing
function loadEditContact() {
    const contactData = localStorage.getItem('editContact');
    if (contactData) {
        const contact = JSON.parse(contactData);
        document.getElementById('contactId').value = contact.id;
        document.getElementById('firstName').value = contact.firstName;
        document.getElementById('lastName').value = contact.lastName;
        document.getElementById('email').value = contact.email;
        document.getElementById('phone').value = contact.phone;
        document.getElementById('address').value = contact.address;
        document.getElementById('notes').value = contact.notes || '';
    } else {
        window.location.href = 'view.html';
    }
}

// Function to update contact
async function updateContact(event) {
    event.preventDefault();
    
    const formData = {
        id: document.getElementById('contactId').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        notes: document.getElementById('notes').value
    };

    try {
        // For demonstration, update the dummy data
        const index = dummyContacts.findIndex(c => c.id === parseInt(formData.id));
        if (index !== -1) {
            dummyContacts[index] = { ...dummyContacts[index], ...formData };
            localStorage.removeItem('editContact');
            alert('Contact updated successfully!');
            window.location.href = 'view.html';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error updating contact');
    }
}

// Function to delete a contact
async function deleteContact(id) {
    if (confirm('Are you sure you want to delete this contact?')) {
        try {
            // For demonstration, remove from dummy data
            const index = dummyContacts.findIndex(c => c.id === id);
            if (index !== -1) {
                dummyContacts.splice(index, 1);
                alert('Contact deleted successfully!');
                displayContacts(dummyContacts);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error deleting contact');
        }
    }
}

// Function to search contacts
function searchContacts(searchTerm) {
    const filteredContacts = dummyContacts.filter(contact => {
        const searchString = `${contact.firstName} ${contact.lastName} ${contact.email} ${contact.phone} ${contact.address} ${contact.notes}`.toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
    });
    displayContacts(filteredContacts);
}

// Add event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.includes('view.html')) {
        loadContacts();
        
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchContacts(e.target.value);
            });
        }
    } else if (window.location.href.includes('edit.html')) {
        loadEditContact();
    }
}); 