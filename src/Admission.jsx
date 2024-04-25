import React from 'react';
import { Input } from './components/ui/input';


const Admission = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <h1 className="text-2xl font-bold mb-3">Add Addmission</h1>
      <form className="border p-5 rounded">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
          <label htmlFor="Name" className="md:col-span-1">
            Name
            <Input type="text" id="name" placeholder="Name" />
          </label>
          <label htmlFor="Mobile Number" className="md:col-span-1">
            Mobile Number
            <Input type="number" id="mobileNumber" placeholder="Mobile Number" />
          </label>
          <label htmlFor="Present Address" className="md:col-span-1">
            Present Address
            <Input type="email" id="presentAddress" placeholder="Present Address" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
          <label htmlFor="Permanent Address" className="md:col-span-1">
            Permanent Address
            <Input type="text" id="permanentAddress" placeholder="Permanent Address" />
          </label>
          <label htmlFor="Email" className="md:col-span-1">
            Email
            <Input type="email" id="email" placeholder="Email" />
          </label>
          <label htmlFor="Date of Birth" className="md:col-span-1">
            Date of Birth
            <Input type="date" id="dateofBirth" placeholder="Date of Birth" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
          <label htmlFor="Class" className="md:col-span-1">
            Class
            <Input type="number" id="class" placeholder="Class" />
          </label>
          <label htmlFor="Section" className="md:col-span-1">
            Select Section

            <select name="Section" id="section">

              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>

          </label>
          <label htmlFor="Image" className="md:col-span-1">
            Upload File
            <Input type="image" id="image" placeholder="Image" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
          <label htmlFor="Gender" className="md:col-span-1">
            Select Gender

            <select name="Gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Other">Others</option>

            </select>

          </label>
          <label htmlFor="Roll" className="md:col-span-1">
            Designation
            <Input type="number" id="roll" placeholder="Roll" />
          </label>
          <label htmlFor="Blood Group" className="md:col-span-1">
            Select Blood Group
            <select name="Blood Group" id="bloodGroup">

              <option value="a+">A+</option>
              <option value="a-">A-</option>
              <option value="b+">B+</option>
              <option value="b-">B-</option>
              <option value="o+">O+</option>
              <option value="o-">O-</option>
              <option value="ab+">AB+</option>
              <option value="ab-">AB-</option>
            </select>



          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
          <label htmlFor="Address" className="md:col-span-1">
            Address
            <Input type="text" id="address" placeholder="Address" />
          </label>
          <label htmlFor="Birth Certificate" className="md:col-span-1">
            Birth Certificate
            <Input type="file" id="birthCertificate" placeholder="Birth Certificate" />
          </label>
          <label htmlFor="Parents Name" className="md:col-span-1">
            Parents Name
            <Input type="text" id="parentsName" placeholder="Parents Name" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
          <label htmlFor="Parents Phone" className="md:col-span-1">
            Parents Phone
            <Input type="number" id="parentsPhone" placeholder="Parents Phone" />
          </label>
          <label htmlFor="Local Guardians" className="md:col-span-1">
            Local Guardians
            <Input type="text" id="localGuardians" placeholder="Local Guardians" />
          </label>
          <label htmlFor="Local Guardians Phone Number" className="md:col-span-1">
            Local Guardians Phone Number
            <Input type="number" id="localguardiansPhone " placeholder="Local Guardians Phone Number" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
          <label htmlFor="Gourp" className="md:col-span-1">
            Select Gourp

            <select name="Group" id="group">
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Arts</option>
            </select>


          </label>
          <label htmlFor="Session" className="md:col-span-1">
            Session
            <select name="Session" id="session">
              <option value="1">2022-23</option>
              <option value="2">2023-24</option>
              <option value="3">2024-25</option>
              <option value="4">2025-26</option>
              <option value="5">2026-27</option>
              <option value="6">2027-28</option>
              <option value="7">2022-23</option>
              <option value="8">2022-23</option>
              <option value="9">2022-23</option>
              <option value="10">2022-23</option>

            </select>
          </label>
          <label htmlFor="Disscount Fee" className="md:col-span-1">
            Disscount Fee
            <Input type="number" id="disscountFee " placeholder="Disscount Fee" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Admission;