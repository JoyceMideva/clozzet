import Mission from "../assets/images/mision.png";
import Vision from "../assets/images/vision.png";
import Values from "../assets/images/values.png";
function Aboutus() {
  return (
    <div className="">
      <div>
        <div className="py-2 flex items-center justify-center bg-no-repeat bg-cover w-[100%] h-[50vh] bg-[url('assets/images/About.png')]">
          <h2 className="font-bold text-7xl text-center w-[40%]  py-6 h-[16vh] bg-white">
            ABOUT US
          </h2>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <h3 className="font-bold text-2xl text-center ">Who We Are</h3>
        <p className="text-2xl py-5">
          Clozzet, Kenya's no. 1 online retailer was established in May 2013
          with the aim and vision to become the one-stop shop for retail in
          Kenya with implementation of best practices both online and offline.
          Clozzet is the largest online retail store in Kenya. At inception we
          did an average delivery time of a week, today we do, on average,
          delivery in 1-5 days.
        </p>
        <p className="text-2xl py-5">
          Initially starting with 3 employees, Clozzet presently has a staff
          strength of 1000 young and entrepreneurial Kenyans including our 150
          man strong customer service team available 7 days a week. We do
          country-wide delivery. Clozzet set-up the 1st e-commerce academy in
          Kenya, the Clozzet Academy, building young entrepreneurs pioneering
          various aspects of businesses.
        </p>
        <p className="text-2xl">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        </p>
      </div>
      <div className="flex container mx-auto items-center justify-center  gap-11">
        <div className="h-[400px] w-[500px] text-2xl shadow-2xl shadow-gray-400 p-6 rounded-md text-center ">
          <div className="flex justify-center">
          <img src={Mission} alt="" srcset="" />
          </div>
          <h4 className="text-2xl font-bold">Mission</h4>
          <p>
            To innovate,To lead,to enhance,to provide best-valueproducts and
            services to global customers and enhance the quality of life for our
            customers and employees.
          </p>
        </div>
        <div className="h-[400px] w-[500px] text-2xl shadow-2xl shadow-gray-400 p-6 rounded-md  text-center">
          <div className="flex justify-center">
          <img src={Vision} alt="" srcset="" />
          </div>
          <h4 className="text-2xl font-bold">Vision</h4>
          <p>
            To be a global leader in fashion- knit & fashion outerwear by
            empowering innovation and design to provide total customer
            satisfaction.
          </p>
        </div>
        <div className="h-[400px] w-[500px] text-2xl shadow-2xl shadow-gray-400 p-6 rounded-md  text-center">
         <div className="flex justify-center">
          <img className="" src={Values} alt="" srcset="" />
          </div>
          <h4 className="text-2xl font-bold">Core Values</h4>
          <ul className="">
            <li>Passion</li>
            <li>Perfomance</li>
            <li>Simplicity</li>
            <li>Togetherness</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto py-6">
        <h3 className="text-2xl font-bold text-center">Our History</h3>
        <p className="text-2xl py-4">
          In the year 2013, Cozzet became a part of the apparel manufacturing
          industry of India. In term of over a decade, our company has developed
          rapidly and at the current moment employs more than 1000 employees at
          our factory sites.CLOZZET is an integrated apparel manufacturer with
          the comprehensive capability to design and manufacture readymade
          garments with high quality for the Global Market, with a very
          competitive price.
          </p>


          <p className="text-2xl py-7"> 
            Our company can produce various kinds of garment,
          in various styles, across three categories which includes – flat-knit
          sweaters, outerwear jackets and circular knit t-shirts, sweatshirts &
          joggers, among which are, apparels for Men, Women , Kids and Babywear
          with a total capacity that reaches 12,00,000 , 2,50,000 & 10,00,000
          pieces respectively, per annum. In producing high quality products,
          our company is supported by sophisticated technology and framework,
          which is helped by manpower and a capable and appressed team of
          experts who have helped us gain a local dominance over our field of
          expertise. With the abutment of complete CLOZZET family, we have been
          able to generate a total revenue of 1.2 BILLION INR in the year
          2016-17 We slowly built our reputation & started getting more
          business. Various international brands vested their design and
          outsourcing requirements and have received satisfactory creative and
          economically viable results. Starting with such a small production
          order from Levi’s now Clozzet Clothing Co. Limited. has grown rapidly
          and has been catering to the global leading apparel brands and growing
          its network all across the world.
        </p>
      </div>
    </div>
  );
}
export default Aboutus;
