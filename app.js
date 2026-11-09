/* Utility formatters */
const formatOrgNo = (str) => {
    if (!str) return '';
    const cleaned = str.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return cleaned.slice(0, 6) + '-' + cleaned.slice(6);
    }
    return str;
};

const formatZipCode = (str) => {
    if (!str) return '';
    const cleaned = str.replace(/\D/g, '');
    if (cleaned.length === 5) {
        return cleaned.slice(0, 3) + ' ' + cleaned.slice(3);
    }
    return str;
};

/* Data for companies */
const COMPANIES = {
    palma: {
        id: 'palma',
        name: 'Palma De lund HB',
        org: '969790-2923',
        address: 'kiliansgatan 14\n223 50 LUND',
        phone: '046120612',
        seat: 'Lund',
        email: 'palmalund@gmail.com',
        bg: '5546-3855'
    },
    palmyra: {
        id: 'palmyra',
        name: 'Palmyra Pizzeria AB',
        org: '559419-8417',
        address: 'kiliansgatan 14\n223 50 LUND',
        phone: '046120612',
        website: 'Palmyrapizzeria.se',
        email: 'info@palmyrapizzeria.se',
        bg: '5973-8773'
    }
};

/* Full Menu Data Extracted from website - Corrected as per user feedback */
const MENU_DATA = {
  "Pizzor": [
    {"name": "Margherita", "price": 110.00},
    {"name": "Vesuvio", "price": 110.00},
    {"name": "Funghi", "price": 110.00},
    {"name": "Hawaii", "price": 110.00},
    {"name": "Capricciosa", "price": 110.00},
    {"name": "Tomaso", "price": 110.00},
    {"name": "Mamma mia", "price": 115.00},
    {"name": "Princessa", "price": 115.00},
    {"name": "Salami", "price": 115.00},
    {"name": "Salami Special", "price": 115.00},
    {"name": "Calzone", "price": 115.00},
    {"name": "Calzone Special", "price": 115.00},
    {"name": "Kung Calzone", "price": 115.00},
    {"name": "Afrikana", "price": 119.00},
    {"name": "Vegetariana", "price": 119.00},
    {"name": "Vegetariana special", "price": 119.00},
    {"name": "Bacon special", "price": 119.00},
    {"name": "La Maffia", "price": 119.00},
    {"name": "Rimini", "price": 119.00},
    {"name": "Bolognese", "price": 124.00},
    {"name": "Mexikana", "price": 124.00},
    {"name": "Pescatore", "price": 124.00},
    {"name": "Toscana", "price": 124.00},
    {"name": "Roma", "price": 124.00},
    {"name": "King Kong", "price": 129.00},
    {"name": "Kebabpizza", "price": 129.00},
    {"name": "Palmyra Pizza", "price": 129.00},
    {"name": "Kebabpizza Special", "price": 129.00},
    {"name": "Kycklingpizza", "price": 129.00},
    {"name": "Kycklingpizza Special", "price": 129.00},
    {"name": "Bombay", "price": 129.00},
    {"name": "Orient", "price": 139.00},
    {"name": "Adrian", "price": 139.00},
    {"name": "Portafino", "price": 139.00},
    {"name": "Venedig", "price": 139.00},
    {"name": "Quattro Stagioni", "price": 139.00},
    {"name": "Margarita -VEGANSK", "price": 119.00},
    {"name": "Funghi -VEGANSK", "price": 119.00},
    {"name": "Bolognese -VEGANSK", "price": 124.00},
    {"name": "Mexikana -VEGANSK", "price": 124.00},
    {"name": "Delphi Special -VEGANSK", "price": 129.00},
    {"name": "Kebabpizza -VEGANSK", "price": 129.00},
    {"name": "Verdura", "price": 139.00},
    {"name": "Salamiruccola", "price": 139.00},
    {"name": "Fume", "price": 139.00}
  ],
  "Familjepizzor": [
    {"name": "Familjepizza: Margherita", "price": 220},
    {"name": "Familjepizza: Vesuvio", "price": 220},
    {"name": "Familjepizza: Funghi", "price": 220},
    {"name": "Familjepizza: Hawaii", "price": 220},
    {"name": "Familjepizza: Capricciosa", "price": 220},
    {"name": "Familjepizza: Tomaso", "price": 220},
    {"name": "Familjepizza: Mamma mia", "price": 230},
    {"name": "Familjepizza: Princessa", "price": 230},
    {"name": "Familjepizza: Salami", "price": 230},
    {"name": "Familjepizza: Salami Special", "price": 230},
    {"name": "Familjepizza: Afrikana", "price": 240},
    {"name": "Familjepizza: Vegetariana", "price": 240},
    {"name": "Familjepizza: Vegetariana special", "price": 240},
    {"name": "Familjepizza: Bacon special", "price": 240},
    {"name": "Familjepizza: La Maffia", "price": 240},
    {"name": "Familjepizza: Rimini", "price": 240},
    {"name": "Familjepizza: Bolognese", "price": 250},
    {"name": "Familjepizza: Mexikana", "price": 250},
    {"name": "Familjepizza: Pescatore", "price": 250},
    {"name": "Familjepizza: Toscana", "price": 250},
    {"name": "Familjepizza: Roma", "price": 250},
    {"name": "Familjepizza: King Kong", "price": 280},
    {"name": "Familjepizza: Kebabpizza", "price": 270},
    {"name": "Familjepizza: Palmyra Pizza", "price": 270},
    {"name": "Familjepizza: Kebabpizza Special", "price": 270},
    {"name": "Familjepizza: Kycklingpizza", "price": 270},
    {"name": "Familjepizza: Kycklingpizza Special", "price": 270},
    {"name": "Familjepizza: Bombay", "price": 270},
    {"name": "Familjepizza: Orient", "price": 280},
    {"name": "Familjepizza: Adrian", "price": 280},
    {"name": "Familjepizza: Portafino", "price": 280},
    {"name": "Familjepizza: Venedig", "price": 280},
    {"name": "Familjepizza: Quattro Stagioni", "price": 280},
    {"name": "Familjepizza: Margarita -VEGANSK", "price": 260},
    {"name": "Familjepizza: Funghi -VEGANSK", "price": 260},
    {"name": "Familjepizza: Bolognese -VEGANSK", "price": 270},
    {"name": "Familjepizza: Mexikana -VEGANSK", "price": 270},
    {"name": "Familjepizza: Delphi Special -VEGANSK", "price": 290},
    {"name": "Familjepizza: Kebabpizza -VEGANSK", "price": 290},
    {"name": "Familjepizza: Verdura", "price": 280},
    {"name": "Familjepizza: Salamiruccola", "price": 280},
    {"name": "Familjepizza: Fume", "price": 280}
  ],
  "Crispy Chicken": [
    {"name": "Crispy tallrik", "price": 139.00},
    {"name": "Crispy tallrik Familj", "price": 290.00},
    {"name": "Crispyrulle", "price": 110.00},
    {"name": "Hot & Crispy", "price": 115.00},
    {"name": "CrispyBurgare", "price": 125.00},
    {"name": "CrispyBox", "price": 95.00}
  ],
  "Tallrikar": [
    {"name": "MIX tallrik", "price": 149.00},
    {"name": "Kebabtallrik", "price": 115.00},
    {"name": "Kycklingtallrik", "price": 115.00},
    {"name": "Shawarmatallrik", "price": 129.00},
    {"name": "Halloumitallrik", "price": 105.00},
    {"name": "Falafeltallrik", "price": 105.00}
  ],
  "Rullar": [
    {"name": "Kebabrulle", "price": 109.00},
    {"name": "Kycklingrulle", "price": 109.00},
    {"name": "Shawarmarulle", "price": 119.00},
    {"name": "Halloumirulle", "price": 105.00},
    {"name": "Falafelrulle", "price": 99.00},
    {"name": "Kebab i Pitabröd", "price": 99.00},
    {"name": "Kyckling i Pitabröd", "price": 99.00},
    {"name": "Shawarma i Pitabröd", "price": 109.00},
    {"name": "Falafel i Pitabröd (NY)", "price": 95.00},
    {"name": "Halloumi i Pitabröd (NY)", "price": 95.00}
  ],
  "Sallader": [
    {"name": "Kebabsallad", "price": 109.00},
    {"name": "Kycklingsallad", "price": 109.00},
    {"name": "Grekisk sallad", "price": 109.00},
    {"name": "Tonfisksallad", "price": 109.00},
    {"name": "Räksallad", "price": 109.00}
  ],
  "Box": [
    {"name": "Kebabbox", "price": 89.00},
    {"name": "Kycklingbox", "price": 89.00},
    {"name": "Shawarmabox", "price": 95.00},
    {"name": "Halloumibox", "price": 89.00},
    {"name": "Falafelbox", "price": 89.00}
  ],
  "Burgare": [
    {"name": "Texas 2x150g", "price": 159.00},
    {"name": "Hamburgare", "price": 115.00},
    {"name": "Kycklingburgare MENY", "price": 125.00},
    {"name": "ChilliBurgare MENY", "price": 125.00},
    {"name": "OstBurgare 200g Meny", "price": 125.00},
    {"name": "Baconburgare 200g Meny", "price": 125.00}
  ],
  "Dryck": [
    {"name": "Läsk 33cl", "price": 20.00},
    {"name": "Läsk 50cl", "price": 25.00},
    {"name": "Läsk 2L", "price": 40.00},
    {"name": "Mer", "price": 15.00}
  ],
  "Tillbehör": [
    {"name": "Pommestallrik", "price": 55.00},
    {"name": "Chilli cheese", "price": 40.00},
    {"name": "Mozzarella sticks", "price": 40.00},
    {"name": "Lökringar", "price": 40.00},
    {"name": "Chicken nuggets", "price": 40.00},
    {"name": "Plastbestick", "price": 5.00}
  ]
};

let currentCompany = null;
let invoiceItems = [];
let editingInvoiceId = null; // set when an existing invoice is opened in the editor
let isTaxInclusive = true;

// --- Firebase Data Layer ---
// Falls back to localStorage if Firebase is not yet configured
const FIREBASE_READY = (
    typeof firebase !== 'undefined' &&
    !firebase.app().options.apiKey.startsWith('PASTE')
);

let invoices = [];
let customers = [];

function showLoader(show) {
    const loader = document.getElementById('firebase-loading');
    if (loader) loader.style.display = show ? 'flex' : 'none';
}

function initApp() {
    if (!FIREBASE_READY) {
        // Fallback: localStorage (works offline / before Firebase is configured)
        invoices = JSON.parse(localStorage.getItem('faktura_invoices') || '[]');
        customers = JSON.parse(localStorage.getItem('faktura_customers') || '[]');
        showLoader(false);
        showView('view-select-company');
        loadSavedCustomers();
        return;
    }

    // Listen to Firebase Auth state
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            // Force logout old anonymous sessions
            if (user.isAnonymous) {
                console.log("Found old anonymous session, logging out...");
                await auth.signOut();
                return;
            }
            // Logged in! Fetch data
            try {
                const uid = user.uid;
                
                const invSnap = await db.collection('users').doc(uid).collection('invoices').orderBy('date', 'desc').get();
                invoices = invSnap.docs.map(d => ({ firestoreId: d.id, ...d.data() }));

                const custSnap = await db.collection('users').doc(uid).collection('customers').get();
                customers = custSnap.docs.map(d => ({ firestoreId: d.id, ...d.data() }));
                
                showLoader(false);
                showView('view-select-company');
                loadSavedCustomers();
            } catch (err) {
                console.error("Error loading data from Firestore:", err);
                alert("Kunde inte ladda fakturor från databasen. Felmeddelande: " + err.message);
                showLoader(false);
                showView('view-select-company');
            }
        } else {
            // Not logged in -> Show login view
            showLoader(false);
            showView('view-login');
        }
    });
}

// Login Function called from view-login
async function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errDiv = document.getElementById('login-error');
    errDiv.style.display = 'none';

    if (!email || !password) {
        errDiv.textContent = 'Ange både e-post och lösenord.';
        errDiv.style.display = 'block';
        return;
    }
    
    const btn = document.getElementById('btn-login');
    btn.textContent = 'Loggar in...';
    btn.disabled = true;

    try {
        await auth.signInWithEmailAndPassword(email, password);
        // onAuthStateChanged will handle the rest
        btn.textContent = 'Logga In';
        btn.disabled = false;
        showLoader(true);
    } catch (err) {
        errDiv.textContent = 'Fel e-post eller lösenord.';
        errDiv.style.display = 'block';
        btn.textContent = 'Logga In';
        btn.disabled = false;
        console.error("Login Error:", err);
    }
}

// Logout function
async function logoutUser() {
    try {
        await auth.signOut();
    } catch (err) {
        console.error("Logout error", err);
    }
}

// Helper: save invoice to Firestore (or localStorage fallback)
async function saveInvoiceToDb(invoiceContext) {
    if (FIREBASE_READY && auth.currentUser) {
        const uid = auth.currentUser.uid;
        const ref = db.collection('users').doc(uid).collection('invoices');
        // Upsert by invoice id. firestoreId is local-only, so keep it out of the document.
        const { firestoreId, ...data } = invoiceContext;
        const existing = invoices.find(i => i.id === invoiceContext.id);
        if (existing && existing.firestoreId) {
            await ref.doc(existing.firestoreId).set(data);
        } else {
            const docRef = await ref.add(data);
            invoiceContext.firestoreId = docRef.id;
        }
    } else {
        localStorage.setItem('faktura_invoices', JSON.stringify(invoices));
    }
}

// Helper: save customer to Firestore (or localStorage fallback)
async function saveCustomerToDb(cust) {
    if (FIREBASE_READY && auth.currentUser) {
        const uid = auth.currentUser.uid;
        const ref = db.collection('users').doc(uid).collection('customers');
        if (cust.firestoreId) {
            await ref.doc(cust.firestoreId).set(cust);
        } else {
            const docRef = await ref.add(cust);
            cust.firestoreId = docRef.id;
        }
    } else {
        localStorage.setItem('faktura_customers', JSON.stringify(customers));
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// Navigation
window.showView = function(viewId) {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);
    
    if (viewId === 'view-invoice-preview') {
        setTimeout(renderPreviewPages, 50);
    }
}

function goBack(viewId) {
    showView(viewId);
    if(viewId === 'view-dashboard') {
        renderDashboard();
    }
}

// ----------------------------------------------------
// COMPANY & DASHBOARD
// ----------------------------------------------------
function selectCompany(companyId) {
    currentCompany = COMPANIES[companyId];
    const dashName = document.getElementById('dash-company-name');
    if (dashName) dashName.textContent = currentCompany.name;
    const activeName = document.getElementById('active-company-name');
    if (activeName) activeName.textContent = currentCompany.name;
    const pdfSenderName = document.getElementById('pdf-sender-name');
    if (pdfSenderName) pdfSenderName.textContent = currentCompany.name;
    const pdfSenderOrg = document.getElementById('pdf-sender-org');
    if (pdfSenderOrg) pdfSenderOrg.textContent = formatOrgNo(currentCompany.org);
    
    renderDashboard();
    showView('view-dashboard');
}

function renderDashboard() {
    const container = document.getElementById('invoice-list-container');
    if (!container) return;
    container.innerHTML = '';
    
    // Show or hide rent button
    const rentBtn = document.getElementById('btn-rent-invoice');
    if (rentBtn) {
        if (currentCompany && currentCompany.name.toLowerCase().includes('palmyra')) {
            rentBtn.style.display = 'inline-block';
        } else {
            rentBtn.style.display = 'none';
        }
    }
    
    if (!currentCompany) return;
    const companyInvoices = invoices.filter(i => i.companyId === currentCompany.id).sort((a,b) => new Date(b.date) - new Date(a.date));
    
    if (companyInvoices.length === 0) {
        container.innerHTML = '<p class="empty-state">Inga fakturor än.</p>';
        return;
    }
    
    companyInvoices.forEach(inv => {
        const div = document.createElement('div');
        div.className = 'invoice-item';
        div.innerHTML = `
            <div class="inv-main">
                <span class="inv-no">#${escapeHtml(inv.no)}</span>
                <span class="inv-cust">${escapeHtml(inv.customerName)}</span>
                <span class="inv-date">${escapeHtml(inv.date)}</span>
            </div>
            <div class="inv-amt">${(Number(inv.total) || 0).toFixed(2)} kr</div>
            <div class="inv-actions">
                <button class="btn-secondary btn-small" onclick="editSavedInvoice('${inv.id}')">✎ Ändra</button>
                <button class="btn-secondary btn-small" onclick="viewSavedInvoice('${inv.id}')">Visa PDF</button>
            </div>
        `;
        container.appendChild(div);
    });
}

function startNewInvoice() {
    editingInvoiceId = null;
    setFormTitle('Skapa Faktura');
    resetForm();
    loadSavedCustomers();
    
    // Calculate Next Invoice Number
    const companyInvoices = invoices.filter(i => i.companyId === currentCompany.id);
    let nextNo = 1001;
    if (companyInvoices.length > 0) {
        const maxNo = Math.max(...companyInvoices.map(i => parseInt(i.no) || 0));
        if(maxNo >= 1000) nextNo = maxNo + 1;
    }
    const invNoEl = document.getElementById('invoice-no');
    if (invNoEl) invNoEl.value = nextNo;
    
    showView('view-invoice-form');
}

function setFormTitle(text) {
    const el = document.getElementById('invoice-form-title');
    if (el) el.textContent = text;
}

function setTaxMode(inclusive) {
    isTaxInclusive = !!inclusive;
    const toggle = document.getElementById('tax-inclusive-toggle');
    if (toggle) toggle.checked = isTaxInclusive;
    document.getElementById('label-exkl')?.classList.toggle('active-label', !isTaxInclusive);
    document.getElementById('label-inkl')?.classList.toggle('active-label', isTaxInclusive);
}

// Open an existing invoice in the editor with everything filled in
window.editSavedInvoice = function(invoiceId) {
    const inv = invoices.find(i => i.id === invoiceId);
    if (!inv) return;

    resetForm();
    loadSavedCustomers();
    editingInvoiceId = inv.id;
    setFormTitle(`Ändra Faktura #${inv.no}`);

    const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v ?? ''; };
    setVal('customer-name', inv.customerName);
    setVal('customer-no', inv.customerCustNo);
    setVal('customer-org', inv.customerOrg);
    setVal('customer-ref', inv.customerRef);
    setVal('customer-street', inv.customerStreet);
    setVal('customer-street2', inv.customerStreet2);
    setVal('customer-zip', inv.customerZip);
    setVal('customer-city', inv.customerCity);
    setVal('invoice-no', inv.no);
    setVal('invoice-date', inv.date);
    setVal('due-date', inv.due);
    updateDaysNetText();

    setTaxMode(inv.isTaxInclusive !== false);

    invoiceItems = (inv.items || []).map((it, idx) => ({
        ...it,
        id: it.id || (Date.now().toString() + idx)
    }));
    if (invoiceItems.length === 0) addInvoiceItem();
    else renderItems();

    showView('view-invoice-form');
}

// ----------------------------------------------------
// CUSTOMERS
// ----------------------------------------------------
function loadSavedCustomers() {
    const select = document.getElementById('saved-customer-select');
    if (!select) return;
    select.innerHTML = '<option value="">-- Välj sparad kund (eller fyll i ny nedan) --</option>';
    
    customers.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name + (c.org ? ` (${c.org})` : '');
        select.appendChild(opt);
    });
}

window.populateCustomerForm = function() {
    const custSelect = document.getElementById('saved-customer-select');
    if (!custSelect) return;
    const id = custSelect.value;
    
    if(!id) {
        if (document.getElementById('customer-name')) document.getElementById('customer-name').value = '';
        if (document.getElementById('customer-no')) document.getElementById('customer-no').value = '';
        if (document.getElementById('customer-org')) document.getElementById('customer-org').value = '';
        if (document.getElementById('customer-ref')) document.getElementById('customer-ref').value = '';
        if (document.getElementById('customer-street')) document.getElementById('customer-street').value = '';
        if (document.getElementById('customer-street2')) document.getElementById('customer-street2').value = '';
        if (document.getElementById('customer-zip')) document.getElementById('customer-zip').value = '';
        if (document.getElementById('customer-city')) document.getElementById('customer-city').value = '';
        return;
    }
    
    const cust = customers.find(c => c.id === id);
    if(cust) {
        if (document.getElementById('customer-name')) document.getElementById('customer-name').value = cust.name || '';
        if (document.getElementById('customer-no')) document.getElementById('customer-no').value = cust.custNo || '';
        if (document.getElementById('customer-org')) document.getElementById('customer-org').value = formatOrgNo(cust.org) || '';
        if (document.getElementById('customer-ref')) document.getElementById('customer-ref').value = cust.ref || '';
        if (document.getElementById('customer-street')) document.getElementById('customer-street').value = cust.street || '';
        if (document.getElementById('customer-street2')) document.getElementById('customer-street2').value = cust.street2 || '';
        if (document.getElementById('customer-zip')) document.getElementById('customer-zip').value = formatZipCode(cust.zip) || '';
        if (document.getElementById('customer-city')) document.getElementById('customer-city').value = cust.city || '';
    }
}

function saveCustomerIfNeeded(custData) {
    const cb = document.getElementById('save-customer-cb');
    if (cb && cb.checked && custData.name.trim() !== '') {
        const existsIndex = customers.findIndex(c => c.name.toLowerCase() === custData.name.toLowerCase());
        const newCust = {
            id: existsIndex >= 0 ? customers[existsIndex].id : Date.now().toString(),
            name: custData.name,
            custNo: custData.custNo,
            org: formatOrgNo(custData.org),
            ref: custData.ref,
            street: custData.street,
            street2: custData.street2 || '',
            zip: formatZipCode(custData.zip),
            city: custData.city
        };
        
        if (existsIndex >= 0) {
            customers[existsIndex] = newCust;
        } else {
            customers.push(newCust);
        }
        saveCustomerToDb(newCust);
        loadSavedCustomers();
    }
}

// ----------------------------------------------------
// FORM & DATES
// ----------------------------------------------------
function resetForm() {
    invoiceItems = [];
    
    const invoiceDateEl = document.getElementById('invoice-date');
    const dueDateEl = document.getElementById('due-date');
    if (!invoiceDateEl || !dueDateEl) return; // Form not in DOM yet
    
    const today = new Date();
    invoiceDateEl.valueAsDate = today;
    
    // Default 20 days net
    const dueDate = new Date();
    dueDate.setDate(today.getDate() + 20);
    dueDateEl.valueAsDate = dueDate;
    
    const nameEl = document.getElementById('customer-name');
    if (nameEl) nameEl.value = '';
    const custNoEl = document.getElementById('customer-no');
    if (custNoEl) custNoEl.value = '';
    const orgEl = document.getElementById('customer-org');
    if (orgEl) orgEl.value = '';
    const refEl = document.getElementById('customer-ref');
    if (refEl) refEl.value = '';
    const streetEl = document.getElementById('customer-street');
    if (streetEl) streetEl.value = '';
    const street2El = document.getElementById('customer-street2');
    if (street2El) street2El.value = '';
    const zipEl = document.getElementById('customer-zip');
    if (zipEl) zipEl.value = '';
    const cityEl = document.getElementById('customer-city');
    if (cityEl) cityEl.value = '';
    
    // Reset saved customer dropdown
    const custSelect = document.getElementById('saved-customer-select');
    if (custSelect) custSelect.value = '';
    
    // Auto-populate the menu categories dynamically based on MENU_DATA keys
    populateMenuCategories();

    // Menu resets
    const menuItem = document.getElementById('menu-item');
    if (menuItem) {
        menuItem.innerHTML = '<option value="">-- Välj sort --</option>';
        menuItem.disabled = true;
    }
    const menuQty = document.getElementById('menu-qty');
    if (menuQty) menuQty.value = '1';
    const menuVat = document.getElementById('menu-vat');
    if (menuVat) menuVat.value = '12';

    updateDaysNetText();
    addInvoiceItem();
}

window.updateDueDate = function() {
    // If invoice date changes, update due date to keep 20 days net automatically
    const invDateStr = document.getElementById('invoice-date').value;
    if(!invDateStr) return;
    
    const invDate = new Date(invDateStr);
    const dueDate = new Date(invDate);
    dueDate.setDate(invDate.getDate() + 20);
    document.getElementById('due-date').valueAsDate = dueDate;
    
    updateDaysNetText();
}

window.updateDaysNetText = function() {
    const invDateStr = document.getElementById('invoice-date')?.value;
    const dueDateStr = document.getElementById('due-date')?.value;
    if(!invDateStr || !dueDateStr) return;
    
    const invD = new Date(invDateStr);
    const dueD = new Date(dueDateStr);
    
    const diffTime = Math.abs(dueD - invD);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const text = `Betalningsvillkor: ${diffDays} dagar netto`;
    const previewEl = document.getElementById('days-net-preview');
    if (previewEl) previewEl.textContent = text;
    
    const pdfTermsEl = document.getElementById('pdf-payment-terms');
    if (pdfTermsEl) pdfTermsEl.textContent = `${diffDays} dagar netto`;
}

// ----------------------------------------------------
// MENU LOGIC
// ----------------------------------------------------
function populateMenuCategories() {
    const catSelect = document.getElementById('menu-category');
    catSelect.innerHTML = '<option value="">-- Välj kategori --</option>';
    
    Object.keys(MENU_DATA).forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        // Skriv ut namnet precis som nyckeln är
        opt.textContent = cat;
        catSelect.appendChild(opt);
    });
}

window.updateMenuItems = function() {
    const cat = document.getElementById('menu-category').value;
    const itemSelect = document.getElementById('menu-item');
    
    itemSelect.innerHTML = '<option value="">-- Välj rätt --</option>';
    
    if (cat && MENU_DATA[cat]) {
        itemSelect.disabled = false;
        MENU_DATA[cat].forEach(item => {
            const opt = document.createElement('option');
            opt.value = JSON.stringify(item);
            opt.textContent = `${item.name} (${item.price} kr)`;
            itemSelect.appendChild(opt);
        });
    } else {
        itemSelect.disabled = true;
    }
}

window.addFromMenu = function() {
    const cat = document.getElementById('menu-category').value;
    const itemVal = document.getElementById('menu-item').value;
    const qtyVal = parseFloat(document.getElementById('menu-qty').value) || 1;
    const vatVal = parseInt(document.getElementById('menu-vat').value);
    
    if (!itemVal) return;
    
    const menuItem = JSON.parse(itemVal);
    let finalGrossPrice = menuItem.price;
    let finalPriceToDisplay = 0;

    if (isTaxInclusive) {
        // Om ui är Inklusive-moms, ska vi bara visa det raka restaurangpriset.
        finalPriceToDisplay = finalGrossPrice;
    } else {
        // Om UI är Exklusive-moms, måste vi ta bort momsen så systemet kan lägga på den senare.
        // Gross = Net * (1 + vatRate) => Net = Gross / (1 + vatRate)
        finalPriceToDisplay = finalGrossPrice / (1 + (vatVal / 100));
        // Bevara 2 decimaler snyggt
        finalPriceToDisplay = Math.round(finalPriceToDisplay * 100) / 100;
    }

    // Skikckar in det som en ny rad!
    const id = Date.now().toString();
    
    // Identifiera om vi ska bygga ihop ett prefix baserat på kategori
    let prefix = '';
    if (cat.toLowerCase() === 'pizzor') {
        prefix = 'Pizza: ';
    } else if (cat.toLowerCase() === 'dryck') {
        prefix = 'Dryck: ';
    }
    
    // Om det finns en tom orginalrad (1 st) tar vi bort den
    if (invoiceItems.length === 1 && invoiceItems[0].type !== 'text' && !invoiceItems[0].desc && !invoiceItems[0].price) {
        invoiceItems = [];
    }
    
    invoiceItems.push({
        id: id,
        desc: `${prefix}${menuItem.name}`,
        vat: vatVal,
        price: finalPriceToDisplay,
        qty: qtyVal
    });
    
    renderItems();

    // Återställ menylistan snabbt för smidigt workflow, men behåll momsen för nästa inslag
    document.getElementById('menu-qty').value = "1";
    document.getElementById('menu-item').value = '';
}

// ----------------------------------------------------
// ITEMS & TAX
// ----------------------------------------------------
window.toggleTaxMode = function() {
    const toggle = document.getElementById('tax-inclusive-toggle');
    isTaxInclusive = toggle.checked;
    
    // Update Labels visually
    document.getElementById('label-exkl').classList.toggle('active-label', !isTaxInclusive);
    document.getElementById('label-inkl').classList.toggle('active-label', isTaxInclusive);
    
    // Update placeholders based on mode
    const inputs = document.querySelectorAll('.price-input');
    inputs.forEach(input => {
        input.placeholder = isTaxInclusive ? 'À-pris inkl. moms' : 'À-pris exkl. moms';
    });
    
    calculateTotals();
}

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function addInvoiceItem() {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    invoiceItems.push({ id, desc: '', vat: 25, price: 0, qty: 1 });
    renderItems();
}

// A free-text line (no price) that can be placed between items, e.g. a date or a note
window.addTextRow = function() {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    invoiceItems.push({ id, type: 'text', desc: '' });
    renderItems();
    const inputs = document.querySelectorAll('#invoice-items .item-row:last-child input');
    if (inputs[0]) inputs[0].focus();
}

window.removeItem = function(id) {
    if (invoiceItems.length > 1) {
        invoiceItems = invoiceItems.filter(item => item.id !== id);
        renderItems();
    }
}

// ----- Drag to reorder (mouse + touch via Pointer Events) -----
function enableRowDragging(container) {
    container.querySelectorAll('.drag-handle').forEach(handle => {
        handle.addEventListener('pointerdown', (e) => {
            const row = handle.closest('.item-row');
            if (!row) return;
            e.preventDefault();
            if (document.activeElement) document.activeElement.blur();
            // Listen on window: moving the row in the DOM would drop pointer capture on the handle
            row.classList.add('dragging');

            const onMove = (ev) => {
                const siblings = Array.from(container.querySelectorAll('.item-row:not(.dragging)'));
                const after = siblings.find(sib => {
                    const r = sib.getBoundingClientRect();
                    return ev.clientY < r.top + r.height / 2;
                });
                if (after) container.insertBefore(row, after);
                else container.appendChild(row);
            };
            const onUp = () => {
                window.removeEventListener('pointermove', onMove);
                window.removeEventListener('pointerup', onUp);
                window.removeEventListener('pointercancel', onUp);
                row.classList.remove('dragging');
                const order = Array.from(container.querySelectorAll('.item-row')).map(r => r.dataset.id);
                invoiceItems.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
                renderItems();
            };
            window.addEventListener('pointermove', onMove);
            window.addEventListener('pointerup', onUp);
            window.addEventListener('pointercancel', onUp);
        });
    });
}

function renderItems() {
    const container = document.getElementById('invoice-items');
    container.innerHTML = '';
    
    const placeholderText = isTaxInclusive ? 'À-pris inkl. moms' : 'À-pris exkl. moms';

    invoiceItems.forEach(item => {
        const div = document.createElement('div');
        div.dataset.id = item.id;
        const handle = `<span class="drag-handle" title="Dra för att flytta" aria-label="Dra för att flytta">⠿</span>`;
        if (item.type === 'text') {
            div.className = 'item-row text-row';
            div.innerHTML = `
                ${handle}
                <input type="text" placeholder="Text (t.ex. datum eller notering)" value="${escapeHtml(item.desc)}" oninput="updateItem('${item.id}', 'desc', this.value)">
                <button type="button" class="remove-btn" onclick="removeItem('${item.id}')">✕</button>
            `;
            container.appendChild(div);
            return;
        }
        div.className = 'item-row';
        div.innerHTML = `
            ${handle}
            <input type="text" placeholder="Beskrivning" value="${escapeHtml(item.desc)}" oninput="updateItem('${item.id}', 'desc', this.value)" required>
            <select onchange="updateItem('${item.id}', 'vat', parseInt(this.value))">
                <option value="25" ${item.vat === 25 ? 'selected' : ''}>25% Moms</option>
                <option value="12" ${item.vat === 12 ? 'selected' : ''}>12% Moms</option>
                <option value="6" ${item.vat === 6 ? 'selected' : ''}>6% Moms</option>
                <option value="0" ${item.vat === 0 ? 'selected' : ''}>0% Moms</option>
            </select>
            <input type="number" class="price-input" placeholder="${placeholderText}" value="${item.price || ''}" min="0" step="0.01" oninput="updateItem('${item.id}', 'price', parseFloat(this.value))" required>
            <input type="number" placeholder="Antal" value="${item.qty}" min="0" step="1" oninput="updateItem('${item.id}', 'qty', parseFloat(this.value))" required>
            <button type="button" class="remove-btn" onclick="removeItem('${item.id}')">✕</button>
        `;
        container.appendChild(div);
    });

    enableRowDragging(container);
    calculateTotals();
}

window.updateItem = function(id, field, value) {
    const item = invoiceItems.find(i => i.id === id);
    if (item) {
        item[field] = value;
        calculateTotals();
    }
}

function calculateTotals() {
    let totalNet = 0;
    let totalVat = 0;

    invoiceItems.forEach(item => {
        if (item.type === 'text') return;
        const enteredTotal = (item.price || 0) * (item.qty || 0);
        let itemNet = 0;
        let itemVat = 0;
        
        if (isTaxInclusive) {
            // enteredTotal is Gross
            // Gross = Net * (1 + vatRate) => Net = Gross / (1 + vatRate)
            let vatRate = item.vat / 100;
            itemNet = enteredTotal / (1 + vatRate);
            itemVat = enteredTotal - itemNet;
        } else {
            // enteredTotal is Net
            itemNet = enteredTotal;
            itemVat = itemNet * (item.vat / 100);
        }
        
        totalNet += itemNet;
        totalVat += itemVat;
    });

    const totalGross = totalNet + totalVat;

    // Update Form UI
    const netEl = document.getElementById('total-net');
    const vatEl = document.getElementById('total-vat');
    const grossEl = document.getElementById('total-gross');
    
    if (netEl) netEl.textContent = totalNet.toFixed(2);
    if (vatEl) vatEl.textContent = totalVat.toFixed(2);
    if (grossEl) grossEl.textContent = totalGross.toFixed(2);

    return { net: totalNet, vat: totalVat, gross: totalGross };
}

// ----------------------------------------------------
// PDF PREVIEW & SAVE
// ----------------------------------------------------
window.previewInvoice = function() {
    // Collect form data
    const custData = {
        name: document.getElementById('customer-name').value,
        custNo: document.getElementById('customer-no')?.value || '',
        org: formatOrgNo(document.getElementById('customer-org').value),
        ref: document.getElementById('customer-ref').value,
        street: document.getElementById('customer-street').value,
        street2: document.getElementById('customer-street2')?.value || '',
        zip: formatZipCode(document.getElementById('customer-zip').value),
        city: document.getElementById('customer-city').value
    };
    
    const invNo = document.getElementById('invoice-no').value;
    const invDate = document.getElementById('invoice-date').value;
    const dueDate = document.getElementById('due-date').value;

    const totals = calculateTotals();
    
    // Save customer
    saveCustomerIfNeeded(custData);
    
    // Generate PDF View Model
    const invoiceContext = {
        id: Date.now().toString(),
        companyId: currentCompany.id,
        no: invNo,
        date: invDate,
        due: dueDate,
        customerName: custData.name,
        customerCustNo: custData.custNo,
        customerOrg: custData.org,
        customerRef: custData.ref,
        customerStreet: custData.street,
        customerStreet2: custData.street2,
        customerZip: custData.zip,
        customerCity: custData.city,
        items: JSON.parse(JSON.stringify(invoiceItems)),
        isTaxInclusive: isTaxInclusive,
        total: totals.gross,
        totals: totals
    };
    
    // Save invoice
    const existsIndex = editingInvoiceId
        ? invoices.findIndex(i => i.id === editingInvoiceId)
        : invoices.findIndex(i => i.no === invNo && i.companyId === currentCompany.id);
    if (existsIndex >= 0) {
        invoiceContext.id = invoices[existsIndex].id;
        invoiceContext.firestoreId = invoices[existsIndex].firestoreId;
        invoices[existsIndex] = invoiceContext;
    } else {
        invoices.push(invoiceContext);
    }
    editingInvoiceId = invoiceContext.id;

    saveInvoiceToDb(invoiceContext).catch(err => console.error('Kunde inte spara faktura:', err));
    
    const backBtn = document.getElementById('btn-preview-back');
    if (backBtn) {
        backBtn.textContent = '← Fixa';
        backBtn.onclick = () => goBack('view-invoice-form');
    }

    fillPdfPreview(invoiceContext);
    showView('view-invoice-preview');
}

// Load an existing invoice straight to PDF view
window.viewSavedInvoice = function(invoiceId) {
    const inv = invoices.find(i => i.id === invoiceId);
    if(!inv) return;
    
    const backBtn = document.getElementById('btn-preview-back');
    if (backBtn) {
        backBtn.textContent = '✎ Ändra';
        backBtn.onclick = () => editSavedInvoice(inv.id);
    }

    fillPdfPreview(inv);
    showView('view-invoice-preview');
}

function fillPdfPreview(inv) {
    const pdfDate = document.getElementById('pdf-date');
    if (pdfDate) pdfDate.textContent = inv.date;
    const pdfDue = document.getElementById('pdf-due');
    if (pdfDue) pdfDue.textContent = inv.due;
    const pdfNo = document.getElementById('pdf-no');
    if (pdfNo) pdfNo.textContent = inv.no;
    
    const pdfCustNo = document.getElementById('pdf-cust-no');
    if (pdfCustNo) pdfCustNo.textContent = inv.customerCustNo || '';

    const pdfRef = document.getElementById('pdf-ref');
    if (pdfRef) pdfRef.textContent = inv.customerRef || '';

    // Payment block (retained from old logic)
    const pdfFooterNo = document.getElementById('pdf-footer-no');
    if (pdfFooterNo) pdfFooterNo.textContent = inv.no;
    
    const pdfPayInstr = document.getElementById('pdf-pay-instruction-no');
    if (pdfPayInstr) pdfPayInstr.textContent = inv.no;

    const pdfCustName = document.getElementById('pdf-customer-name');
    if (pdfCustName) pdfCustName.textContent = inv.customerName;
    const pdfCustOrg = document.getElementById('pdf-customer-org');
    if (pdfCustOrg) pdfCustOrg.textContent = inv.customerOrg ? `Org.nr: ${formatOrgNo(inv.customerOrg)}` : '';
    const pdfCustStreet = document.getElementById('pdf-customer-street');
    if (pdfCustStreet) pdfCustStreet.textContent = inv.customerStreet;
    const pdfCustStreet2 = document.getElementById('pdf-customer-street2');
    if (pdfCustStreet2) {
        pdfCustStreet2.textContent = inv.customerStreet2 || '';
        pdfCustStreet2.style.display = inv.customerStreet2 ? '' : 'none';
    }
    
    // Combine Zip and City: 224 77 Lund
    const pdfCustZipCity = document.getElementById('pdf-customer-zipcity');
    if (pdfCustZipCity) {
        pdfCustZipCity.textContent = `${formatZipCode(inv.customerZip)} ${inv.customerCity}`;
    }

    // Render Dynamic 3-column Footer (from COMPANIES info)
    const footerContainer = document.getElementById('pdf-footer-container');
    if (footerContainer && currentCompany) {
        const comp = currentCompany;
        const bgHTML = `
            <div class="payment-box">
                <strong>BANKGIRO</strong><br>
                <span class="bg-large" style="white-space: nowrap;">${comp.bg || ''}</span><br>
                <small>Ange fakturanr: ${inv.no}</small>
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.7rem; color: #666; text-align: center;">Godkänd för F-skatt</div>
        `;

        footerContainer.innerHTML = `
            <div class="footer-col" style="flex: 0 0 33%; text-align: left;">
                <strong>Adress & Kontakt</strong><br>
                ${comp.name}<br>
                ${comp.address ? comp.address.replace(/\\n|\n/g, '<br>') : ''}<br>
                Tel: ${comp.phone || ''}
            </div>
            <div class="footer-col" style="flex: 0 0 34%; text-align: center;">
                ${bgHTML}
            </div>
            <div class="footer-col" style="flex: 0 0 33%; text-align: right;">
                <strong>Företagsinfo</strong><br>
                Org.nr: ${formatOrgNo(comp.org) || ''}<br>
                Säte: ${comp.seat || ''}<br>
                ${comp.email || ''}<br>
                ${comp.website || ''}
            </div>
        `;
    }

    // Fill PDF Items
    const tbody = document.getElementById('pdf-items-tbody');
    tbody.innerHTML = '';
    
    inv.items.forEach(item => {
        if (!item.desc) return;
        if (item.type === 'text') {
            const trText = document.createElement('tr');
            trText.className = 'pdf-text-row';
            trText.innerHTML = `<td colspan="5">${escapeHtml(item.desc)}</td>`;
            tbody.appendChild(trText);
            return;
        }
        
        const enteredTotal = (item.price || 0) * (item.qty || 0);
        let itemGross = 0;
        let itemNetUnit = 0;
        
        if (inv.isTaxInclusive) {
            itemGross = enteredTotal;
            // Best practice on invoices is to show Unit Price excluding VAT on lines, even if entered incl.
            itemNetUnit = item.price / (1 + (item.vat/100));
        } else {
            const itemVat = enteredTotal * (item.vat / 100);
            itemGross = enteredTotal + itemVat;
            itemNetUnit = item.price;
        }
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${escapeHtml(item.desc)}</td>
            <td style="text-align: center;">${item.vat}%</td>
            <td style="text-align: right;">${itemNetUnit.toFixed(2)}</td>
            <td style="text-align: right;">${item.qty}</td>
            <td style="text-align: right;">${itemGross.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });

    // Totals
    const pdfTotalNet = document.getElementById('pdf-total-net');
    if (pdfTotalNet) pdfTotalNet.textContent = inv.totals.net.toFixed(2);
    const pdfTotalVat = document.getElementById('pdf-total-vat');
    if (pdfTotalVat) pdfTotalVat.textContent = inv.totals.vat.toFixed(2);
    const pdfTotalGross = document.getElementById('pdf-total-gross');
    if (pdfTotalGross) pdfTotalGross.textContent = inv.totals.gross.toFixed(2);
    
    // Payment terms update
    const invD = new Date(inv.date);
    const dueD = new Date(inv.due);
    const diffTime = Math.abs(dueD - invD);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const pdfTerms = document.getElementById('pdf-payment-terms');
    if (pdfTerms) pdfTerms.textContent = `${diffDays} dagar netto`;
}

// ----------------------------------------------------
// EXPORT PDF
// ----------------------------------------------------
// ----------------------------------------------------
// A4 PAGES (shared by the on-screen preview and the PDF download)
// ----------------------------------------------------
const A4_W_MM = 210;
const A4_H_MM = 297;

// Header on continuation pages (sida 2+), drawn straight onto the page canvas
function drawContinuationHeader(ctx, mm, invNo, withColumns) {
    const left = 20 * mm;
    const right = (A4_W_MM - 20) * mm;
    const width = right - left;

    ctx.fillStyle = '#222222';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.font = `bold ${3.9 * mm}px Helvetica, Arial, sans-serif`;
    const name = currentCompany ? currentCompany.name : '';
    ctx.fillText(`${name} - Faktura ${invNo} (forts.)`, left, 14 * mm);

    ctx.fillStyle = '#c8c8c8';
    ctx.fillRect(left, 17 * mm, width, 0.3 * mm);
    if (!withColumns) return;

    // Column headings, same widths as the HTML table
    const fractions = [0.45, 0.10, 0.15, 0.10, 0.20];
    const xs = [];
    let x = left;
    fractions.forEach(f => { xs.push(x); x += f * width; });
    const colW = fractions.map(f => f * width);

    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(left, 19 * mm, width, 6 * mm);
    ctx.fillStyle = '#444444';
    ctx.font = `bold ${2.5 * mm}px Helvetica, Arial, sans-serif`;
    const yb = 23 * mm;
    const pad = 2 * mm;
    ctx.textAlign = 'left';   ctx.fillText('BESKRIVNING', xs[0] + pad, yb);
    ctx.textAlign = 'center'; ctx.fillText('MOMS', xs[1] + colW[1] / 2, yb);
    ctx.textAlign = 'right';  ctx.fillText('À-PRIS', xs[2] + colW[2] - pad, yb);
    ctx.fillText('ANTAL', xs[3] + colW[3] - pad, yb);
    ctx.fillText('BELOPP', xs[4] + colW[4] - pad, yb);
    ctx.fillStyle = '#c8c8c8';
    ctx.fillRect(left, 25.5 * mm, width, 0.3 * mm);
    ctx.textAlign = 'left';
}

// Renders #pdf-paper and splits it into A4 page images (JPEG data URLs).
// Page 1 keeps header, customer and footer (address, bankgiro, company info);
// only item rows and totals continue on page 2+.
async function buildInvoicePages() {
    const element = document.getElementById('pdf-paper');
    let layout = null;

    const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: 794,        // A4 width at 96 dpi
        windowWidth: 794,  // lay out as A4, also on phones
        onclone: (doc) => {
            // The paper is kept invisible on screen (the preview shows page images instead): show it in the clone
            const holder = doc.getElementById('pdf-scale-container');
            if (holder) {
                holder.classList.remove('capture-only');
                holder.style.transform = 'none';
            }
            // Measure page-break positions here: this is the layout that ends up in the image
            const paper = doc.getElementById('pdf-paper');
            if (!paper) return;
            const rows = Array.from(paper.querySelectorAll('.pdf-prof-table tbody tr'))
                .map(tr => tr.offsetParent.offsetTop + tr.offsetTop + tr.offsetHeight);
            const blocks = [];
            const summaryEl = paper.querySelector('.pdf-prof-summary-wrapper');
            const footerEl = paper.querySelector('.pdf-prof-footer');
            if (summaryEl) blocks.push(summaryEl.offsetTop, summaryEl.offsetTop + summaryEl.offsetHeight);
            const footer = footerEl
                ? { top: footerEl.offsetTop, bottom: footerEl.offsetTop + footerEl.offsetHeight }
                : null;
            layout = { width: paper.offsetWidth, rows, blocks, footer };
        }
    });

    const invNo = document.getElementById('pdf-no').textContent;
    const mm = canvas.width / A4_W_MM;                 // canvas px per mm
    const pageHpx = Math.round(A4_H_MM * mm);
    const pxPerCss = canvas.width / ((layout && layout.width) || element.offsetWidth || 794);
    const toPx = v => Math.round(v * pxPerCss);

    const CONT_TOP = 26;    // mm, content start on continuation pages
    const CONT_BOTTOM = 14; // mm, reserved for the page number
    const FOOTER_BOTTOM = 18; // mm, footer distance from the bottom of page 1

    const rowBreaks = (layout ? layout.rows : []).map(toPx).sort((a, b) => a - b);
    const lastRowBottom = rowBreaks.length ? rowBreaks[rowBreaks.length - 1] : 0;
    const allBreaks = rowBreaks.concat((layout ? layout.blocks : []).map(toPx)).sort((a, b) => a - b);
    const footerPx = layout && layout.footer
        ? { top: toPx(layout.footer.top), bottom: toPx(layout.footer.bottom) }
        : null;

    const newPage = () => {
        const c = document.createElement('canvas');
        c.width = canvas.width;
        c.height = pageHpx;
        const ctx = c.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, c.width, c.height);
        return { c, ctx };
    };
    const blit = (ctx, from, to, y) => {
        const h = to - from;
        if (h > 0) ctx.drawImage(canvas, 0, from, canvas.width, h, 0, y, canvas.width, h);
    };

    const pages = [];
    if (canvas.height <= pageHpx + 2 || !footerPx) {
        // Fits on one A4 page
        const { c, ctx } = newPage();
        blit(ctx, 0, Math.min(canvas.height, pageHpx), 0);
        pages.push(c);
    } else {
        const footerH = footerPx.bottom - footerPx.top;
        const footerY = pageHpx - Math.round(FOOTER_BOTTOM * mm) - footerH;
        const contentEnd = footerPx.top - 3; // rows + totals, without the footer and its top border
        const firstMax = footerY - Math.round(4 * mm);
        const contMax = Math.floor((A4_H_MM - CONT_TOP - CONT_BOTTOM) * mm);
        const breaks = allBreaks.filter(b => b < contentEnd);

        const segments = [];
        let start = 0;
        while (start < contentEnd) {
            const max = segments.length === 0 ? firstMax : contMax;
            let end = Math.min(start + max, contentEnd);
            if (end < contentEnd) {
                const fitting = breaks.filter(b => b > start && b <= end);
                if (fitting.length) end = fitting[fitting.length - 1];
            }
            segments.push({ start, end, hasRows: start < lastRowBottom });
            start = end;
        }

        segments.forEach((seg, i) => {
            const { c, ctx } = newPage();
            if (i === 0) {
                blit(ctx, seg.start, seg.end, 0);
                blit(ctx, footerPx.top, footerPx.bottom, footerY);
            } else {
                drawContinuationHeader(ctx, mm, invNo, seg.hasRows);
                blit(ctx, seg.start, seg.end, Math.round(CONT_TOP * mm));
            }
            pages.push(c);
        });

        // "Sida x av N"
        pages.forEach((c, i) => {
            const ctx = c.getContext('2d');
            ctx.fillStyle = '#787878';
            ctx.font = `${2.9 * mm}px Helvetica, Arial, sans-serif`;
            ctx.textAlign = 'right';
            ctx.textBaseline = 'alphabetic';
            ctx.fillText(`Sida ${i + 1} av ${pages.length}`, (A4_W_MM - 20) * mm, (A4_H_MM - 8) * mm);
        });
    }

    return { invNo, pages: pages.map(c => c.toDataURL('image/jpeg', 0.95)) };
}

// ----- On-screen preview: show the real A4 pages -----
let previewPages = null;   // { invNo, pages } for the invoice currently in the preview
let previewToken = 0;

async function renderPreviewPages() {
    const token = ++previewToken;
    previewPages = null;
    const pagesEl = document.getElementById('pdf-pages');
    if (!pagesEl) return;
    pagesEl.innerHTML = '<p class="pdf-pages-loading">Skapar förhandsvisning…</p>';
    try {
        if (document.fonts && document.fonts.ready) await document.fonts.ready;
        const result = await buildInvoicePages();
        if (token !== previewToken) return; // another invoice was opened meanwhile
        previewPages = result;
        pagesEl.innerHTML = '';
        result.pages.forEach((src, i) => {
            const page = document.createElement('div');
            page.className = 'pdf-page';
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Sida ${i + 1} av ${result.pages.length}`;
            page.appendChild(img);
            if (result.pages.length > 1) {
                const label = document.createElement('div');
                label.className = 'pdf-page-label';
                label.textContent = `Sida ${i + 1} av ${result.pages.length}`;
                page.appendChild(label);
            }
            pagesEl.appendChild(page);
        });
    } catch (err) {
        if (token !== previewToken) return;
        console.error('Preview Error:', err);
        pagesEl.innerHTML = '<p class="pdf-pages-loading">Kunde inte visa förhandsvisningen.</p>';
    }
}

// ----- Download -----
window.exportPDF = async function() {
    try {
        const result = previewPages || await buildInvoicePages();
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        result.pages.forEach((src, i) => {
            if (i > 0) pdf.addPage();
            pdf.addImage(src, 'JPEG', 0, 0, A4_W_MM, A4_H_MM);
        });
        pdf.save(`Faktura_${result.invNo}.pdf`);
    } catch (err) {
        console.error("PDF Export Error:", err);
        alert("Kunde inte skapa PDF.");
    }
}

// ----------------------------------------------------
// RENT INVOICE MODAL
// ----------------------------------------------------
window.openRentModal = function() {
    // Pre-select current month
    const monthNames = ['Januari','Februari','Mars','April','Maj','Juni','Juli','Augusti','September','Oktober','November','December'];
    const currentMonth = monthNames[new Date().getMonth()];
    const rentMonthEl = document.getElementById('rent-month');
    if (rentMonthEl) rentMonthEl.value = currentMonth;
    
    // Pre-fill dates
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const dueD = new Date();
    dueD.setDate(today.getDate() + 20);
    const dueStr = dueD.toISOString().split('T')[0];
    
    if (document.getElementById('rent-date')) document.getElementById('rent-date').value = todayStr;
    if (document.getElementById('rent-due')) document.getElementById('rent-due').value = dueStr;
    
    const rentAmountEl = document.getElementById('rent-amount');
    if (rentAmountEl) rentAmountEl.value = '';
    
    document.getElementById('rent-modal').classList.add('active');
}

window.closeRentModal = function() {
    document.getElementById('rent-modal').classList.remove('active');
}

window.generateRentInvoice = function() {
    const month = document.getElementById('rent-month').value;
    const amountVal = parseFloat(document.getElementById('rent-amount').value);
    if (!amountVal || isNaN(amountVal)) {
        alert('Fyll i ett giltigt hyresbelopp!');
        return;
    }
    
    const taxModeEl = document.querySelector('input[name="rentTaxMode"]:checked');
    const isRentTaxInclusive = taxModeEl ? (taxModeEl.value === 'inkl') : true;
    
    // Calculate Next Invoice Number
    const companyInvoices = invoices.filter(i => i.companyId === currentCompany.id);
    let invNo = '1001';
    if (companyInvoices.length > 0) {
        const maxNo = Math.max(...companyInvoices.map(i => parseInt(i.no) || 0));
        if (maxNo >= 1000) invNo = (maxNo + 1).toString();
    }
    
    // Get Dates from Modal
    const invDateStr = document.getElementById('rent-date').value || new Date().toISOString().split('T')[0];
    const dueDateStr = document.getElementById('rent-due').value;
    
    if (!dueDateStr) {
        alert('Vänligen välj ett förfallodatum!');
        return;
    }
    
    // Build Totals (25% moms)
    const vatRate = 0.25;
    let totalNet, totalVat;
    if (isRentTaxInclusive) {
        totalNet = amountVal / (1 + vatRate);
        totalVat = amountVal - totalNet;
    } else {
        totalNet = amountVal;
        totalVat = totalNet * vatRate;
    }
    const totalGross = totalNet + totalVat;
    
    const items = [{
        id: 'rent-' + Date.now(),
        desc: 'Hyra avseende ' + month.toUpperCase(),
        vat: 25,
        price: isRentTaxInclusive ? amountVal : amountVal,
        qty: 1
    }];
    
    const invoiceContext = {
        id: Date.now().toString(),
        companyId: currentCompany.id,
        no: invNo,
        date: invDateStr,
        due: dueDateStr,
        customerName: 'PALMA DE LUND HB',
        customerCustNo: '1',
        customerOrg: '969790-2923',
        customerRef: '',
        customerStreet: 'Kiliansgatan 14',
        customerZip: '22350',
        customerCity: 'LUND',
        items: items,
        isTaxInclusive: isRentTaxInclusive,
        total: totalGross,
        totals: { net: totalNet, vat: totalVat, gross: totalGross }
    };
    
    invoices.push(invoiceContext);
    saveInvoiceToDb(invoiceContext).catch(err => console.error('Kunde inte spara hyresfaktura:', err));
    renderDashboard();
    
    closeRentModal();
    
    const backBtn = document.getElementById('btn-preview-back');
    if (backBtn) {
        backBtn.textContent = '← Gå tillbaka';
        backBtn.onclick = () => goBack('view-dashboard');
    }

    fillPdfPreview(invoiceContext);
    showView('view-invoice-preview');
}
