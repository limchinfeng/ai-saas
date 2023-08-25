import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {

    // const apiLimitCount = await getApiLimitCount();
    const apiLimitCount = 1;

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:w-72
                md:fixed md:inset-y-0 bg-gray-900 text-white
            ">
                <div>
                    <Sidebar apiLimitCount={apiLimitCount} />
                </div>
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    )
} 

export default DashboardLayout;