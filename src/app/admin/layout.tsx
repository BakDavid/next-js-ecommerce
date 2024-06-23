import { Nav, NavLink } from "@/components/Nav";

// we don't need cacheing on admin page, to avoid cache problems
// for other pages we should have cache
export const dynamic = "force-dynamic";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Nav>
                <NavLink href="/admin">Dashboard</NavLink>
                <NavLink href="/admin/products">Products</NavLink>
                <NavLink href="/admin/customers">Customers</NavLink>
                <NavLink href="/admin/sales">Sales</NavLink>
            </Nav>
            <div className="container my-6">{children}</div>
        </>
    );
}
