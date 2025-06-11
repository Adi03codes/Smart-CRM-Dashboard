import React, { useEffect, useState } from "react";
import axios from "axios";

const AddLeadForm = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({ contactId: "", status: "New" });

  useEffect(() => {
    axios.get("http://localhost:5000/api/contacts").then(res => setContacts(res.data));
  }, []);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/leads", formData).then(() => {
      alert("Lead added");
      setFormData({ contactId: "", status: "New" });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="font-semibold">Add Lead</h2>
      <select name="contactId" value={formData.contactId} onChange={handleChange} className="mr-2 border">
        <option value="">Select Contact</option>
        {contacts.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
      </select>
      <select name="status" value={formData.status} onChange={handleChange} className="mr-2 border">
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Won">Won</option>
        <option value="Lost">Lost</option>
      </select>
      <button className="bg-green-500 text-white px-4 py-1 rounded">Add</button>
    </form>
  );
};

export default AddLeadForm;
