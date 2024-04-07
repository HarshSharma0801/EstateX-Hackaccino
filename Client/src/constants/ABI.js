const ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "Domake",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Address",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "Number",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "Price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "email",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Type",
              "type": "string"
            }
          ],
          "internalType": "struct Lock.Data[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "Address",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "Number",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "Price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "Description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "Type",
          "type": "string"
        }
      ],
      "name": "ListProp",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getData",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Address",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "Number",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "Price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "email",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Type",
              "type": "string"
            }
          ],
          "internalType": "struct Lock.Data[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "make",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Address",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "Number",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "Price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "email",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Type",
              "type": "string"
            }
          ],
          "internalType": "struct Lock.Data[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  
  export default ABI;