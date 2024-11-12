// react-icons
import { CiLocationOn, CiDeliveryTruck } from "react-icons/ci";

function NavbarTopComponent() {
  return (
    <div className='container mx-auto flex-center flex-col md:flex-row justify-center md:justify-between h-[90px] gap-2'>
        <h3 className="text-blackTextColor">Need help? Call us: (+98) 1234 567 890</h3>

        <div className="flex-center gap-4">
            <div className="flex-center gap-2">
                <CiLocationOn color="black" size={26} />
                <span className="text-blackTextColor">Our location</span>
            </div>
            <div className="flex-center gap-2">
                <CiDeliveryTruck color="black" size={26} />
                <span className="text-blackTextColor">Track your order</span>
            </div>
        </div>
    </div>
  )
}

export default NavbarTopComponent