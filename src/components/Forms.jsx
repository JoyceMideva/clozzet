import { useState } from "react";
function Forms() {
  const [formField, setFormField] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };

  function handleAdd(e) {
    e.preventDefault();
    const addErrors = {};
    (formField.productName === undefined || formField.productName === "") &&
      (addErrors.productName = "Please enter your product Name");
    (formField.productPrice === undefined || formField.productPrice === "") &&
      (addErrors.productPrice = "Please enter your product price");
    (formField.category === undefined || formField.category === "") &&
      (addErrors.category = "Please enter your enter your category");
    (formField.uploadProductImage === undefined ||
      formField.uploadProductImage === "") &&
      (addErrors.uploadProductImage =
        "Please enter your uploaded product image");
    (formField.DetailedProductDescription === undefined ||
      formField.DetailedProductDescription === "") &&
      (addErrors.DetailedProductDescription =
        "Please enter your Detailed Product Description");
    setFormErrors(addErrors);
    console.log(addErrors);
  }

  return (
    <div className="container mx-auto w-[70%]">
      <h2 className="font-bold text-5xl text-center">Add New Product</h2>
      <div className=" border-2 text-center  mx-auto flex flex-col w-[70%] items-center">
        {formErrors.productName && (
          <p className="text-red-500">{formErrors.productName}</p>
        )}
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Product Name"
          name="productName"
          className="outline-none my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[50%]"
        />
        {formErrors.productPrice && (
          <p className="text-red-500">{formErrors.productPrice}</p>
        )}
        <input
          onChange={(e) => handleChange(e)}
          type="number"
          placeholder="Price"
          name="productPrice"
          className="outline-none my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[50%]"
        />
        {formErrors.selectCategory && (
          <p className="text-red-500">{formErrors.selectCategory}</p>
        )}
        <div className="flex w-[70%]">
          <select
            onChange={(e) =>
              setFormField((prev) => ({
                ...formField,
                category: e.target.value,
              }))
            }
            id=""
            className=" outline-none mx-auto my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[70%]"
          >
            <option value="">Select Category</option>
            <option name="Men Category" value="Men Category">
              Men Category
            </option>
            <option value="Ladies Category">Ladies category</option>
            <option value="Children Category">Children Category</option>
          </select>
        </div>
        {formErrors.uploadProductImage && (
          <p className="text-red-500">{formErrors.uploadProductImage}</p>
        )}
        <input
          type="file"
          onChange={(e) => handleChange(e)}
          placeholder="Upload Product Image"
          name="uploadProductImage"
          className=" my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[50%]"
        />
        {formErrors.DetailedProductDescription && (
          <p className="text-red-500">
            {formErrors.DetailedProductDescription}
          </p>
        )}
        <textarea
          onChange={(e) => handleChange(e)}
          placeholder="DetailedProductDescription"
          name="DetailedProductDescription"
          id=""
          cols="70"
          rows="30"
          className=" my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[50%]"
        >
        </textarea>
        <button
          type="submit"
          onClick={(e) => handleAdd(e)}
          className="bg-teal-500 my-5 text-lg font-bold text-white py-4 px-2 w-[40%] rounded-full"
        >
          Add Product
        </button>
      </div>
    </div>
  );
}
export default Forms;
