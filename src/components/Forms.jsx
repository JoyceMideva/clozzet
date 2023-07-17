function Forms() {
    return(
        <div className="container mx-auto w-[70%]">
            <h2 className="font-bold text-5xl text-center">Add New Product</h2>
            <div className=" border-2 text-center  mx-auto flex flex-col w-[70%] items-center">
<input type="text" placeholder="Product Name" className="outline-none my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[50%]"/>
<input type="number" placeholder="Price" className="outline-none my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[50%]"/>
<div className="flex w-[70%]">

<select name="" id="" className=" outline-none mx-auto my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[70%]">
 <option value="">Select Category</option>
    <option value="">Men Category</option>
    <option value="">Ladies category</option>
    <option value="">Children Category</option>
</select>
</div>
<input type="file" placeholder="Upload Product Image" className=" my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[50%]" />
<textarea name="Detailed Product Description" id="" cols="70" rows="30" className=" my-5 py-4 px-2 border-2 border-grey-400 rounded-md w-[50%]">Detailed Product Description</textarea>
<button type="submit" className="bg-teal-500 my-5 text-lg font-bold text-white py-4 px-2 w-[40%] rounded-full">Add Product</button>
            </div>
        </div>

    )
}
export default Forms