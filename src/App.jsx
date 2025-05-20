import React, { useState } from "react";
import TicketForm from "./component/TicketForm";
import TicketPreview from "./component/TicketPreview";

const App = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({});

  const handleGenerate = (data) => {
    setFormData(data);
    setShowPreview(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 p-6 text-white">
      {showPreview ? (
        <TicketPreview
          formData={formData}
          onCancel={() => setShowPreview(false)}
        />
      ) : (
        <TicketForm onGenerate={handleGenerate} />
      )}
    </div>
  );
};

export default App;
