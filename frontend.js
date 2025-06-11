import React from "react";
import ContactList from "./components/ContactList";
import LeadList from "./components/LeadList";
import AddContactForm from "./components/AddContactForm";
import AddLeadForm from "./components/AddLeadForm";

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Smart CRM Dashboard</h1>
      <AddContactForm />
      <ContactList />
      <AddLeadForm />
      <LeadList />
    </div>
  );
}

export default App;