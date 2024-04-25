import React from 'react';

const Subject = () => {
    return (
        <div style={{ overflow: "hidden" }}>
      <h1 className="text-2xl font-bold mb-3">Add Subject</h1>
      <form className="border p-5 rounded">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
          <label htmlFor="Name" className="md:col-span-1">
            Name
            <Input type="text" id="name" placeholder="Name" />
          </label>
          <label htmlFor="Assign Teacher" className="md:col-span-1">
          Assign Teacher
            <Input type="text" id="assginTeacher" placeholder="Assign Teacher" />
          </label>
         
        </div>
        
      </form>
    </div>
    );
};

export default Subject;