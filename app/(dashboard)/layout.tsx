import Sidebar from "@/components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
      <section className='flex h-screen'>
        <div>
            <Sidebar />
        </div>
          <div className='w-full ml-64 p-6 h-screen'>
            {children}
          </div>
      </section>
  )
}