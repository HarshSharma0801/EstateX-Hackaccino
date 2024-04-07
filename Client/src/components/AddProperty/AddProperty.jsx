import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSyncAlt, FaEnvelope, FaKey, FaShieldVirus } from "react-icons/fa";
import { ethers } from "ethers";
import Navbar from "../Navbar/Navbar";
import SidePanel from "../Home/Sidepanel";
import ABI from "../../constants/ABI";
import contractAddress from "../../constants/contractAddress";

const AddProperty = ({ state, account, clicked }) => {
  const [getState, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const nav = useNavigate();
  const [Main, setMain] = useState();

  useEffect(() => {
    const getContract = async () => {
      console.log("hi");
      const CAddres = contractAddress;
      const CABI = ABI;
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        const provider = new ethers.providers.Web3Provider(ethereum); //read the Blockchain
        console.log(provider);
        const signer = provider.getSigner(); //write the blockchain
        console.log(signer);
        const contract = new ethers.Contract(CAddres, CABI, signer);

        console.log(contract)

        getState && setMain(await contract.getData());

        contract && setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    getContract();
  }, []);




  
  
  const Transact = async(event)=>{
    event.preventDefault();
    // const {contract}=state;
    const Address = document.querySelector("#address").value;

    const name = document.querySelector("#name").value;

    const Type = document.querySelector("#type").value;

    const email = document.querySelector("#email").value;

    const Price = document.querySelector("#price").value;

    const Number = document.querySelector("#mobileNumber").value;


    const Description = document.querySelector("#des").value;

   console.log(getState.contract)

    const amount = {value:ethers.utils.parseEther("0.001")}
    const transaction = await getState.contract.ListProp(name,Address,Number,Price,email,Description,Type,amount)
    await transaction.wait();
    alert("Transaction is successul");
    nav('/');
  }


  return (
    <div className="flex flex-col h-screen">
      <Navbar account={account} />
      <div className="flex gap-20">
        <SidePanel />
        <form
          className="flex flex-col pt-3 p-4 md:pt-8 w-[60%] mx-auto"
          action="/data"
          onSubmit={Transact}
        >
          {/* Title starts */}
          <div className="flex flex-col pt-4 relative">
            <label htmlFor="Title" className="text-lg">
              Property Address{" "}
            </label>
            <div className="relative">
              <input
                type="title"
                name="address"
                id="address"
                placeholder="Enter a Adress"
                className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-5 w-full bg-gray-50 pr-12"
              />
            </div>
          </div>
          {/* Description starts */}

          {/* Name & Mobile */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="Title" className="text-lg">
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Owner Name"
                  id="name"
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>

            <div className="w-1/2">
              <label htmlFor="type" className="text-lg">
                Type
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="type"
                  placeholder="Type of Property"
                  id="type"
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}
            <div className="w-1/2">
              <label htmlFor="password" className="text-lg">
                Mobile Number
              </label>
              <div className="relative">
                <input
                  name="mobile"
                  placeholder="Owner Mobile Number"
                  type="text"
                  id="mobileNumber"
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>
          {/* Email & Alt. Mobile */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="Title" className="text-lg">
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  placeholder="Owner Email"
                  id="email"
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />

                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}

            {/* */}
          </div>
          <label htmlFor="about" className="text-lg">
            Description
          </label>
          <div className="relative">
            <textarea
              type="text"
              name="about"
              placeholder="description"
              id="des"
              className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-20 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
            />
          </div>

          <label htmlFor="about" className="text-lg">
            Price
          </label>
          <div className="relative">
            <input
              type="number"
              name="price"
              placeholder="price"
              id="price"
              className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-20 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
            />
          </div>

          {/* Address starts */}

          {/* pincode & city */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2">
            {/* */}

            {/* */}
            {/* */}

            {/* */}
          </div>

          <div>
            <button
              className="bg-black text-white p-2 m-16 rounded-xl "
              type="submit"
              disabled={!getState}
            >
              Make Traction{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
