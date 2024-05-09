import {Grid, Home} from "lucide-react";
import NavLink from "@/components/navLink";

export default function Sidebar() {
    return (
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <NavLink name='dashboard' icon={<Home />} href='/'/>
                    </li>
                    <li>
                        <NavLink name='tasks' icon={<Grid />} href='/tasks'/>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
