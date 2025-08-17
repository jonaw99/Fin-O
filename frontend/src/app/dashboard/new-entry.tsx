import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import {DataTable} from "@/components/data-table.tsx";


// import data from "./data.json";
import data from "./finance_data.json";
import type {FinanceItem} from "@/app/dashboard/FinanceItem.ts";

export default function NewEntry() {

    const parsedData: FinanceItem[] = data.map((item) => ({
        ...item,
        type: item.type === "income" ? "income" : "expense",
        date: new Date(item.date),
    }))

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "calc(var(--spacing) * 72)",
                        "--header-height": "calc(var(--spacing) * 12)",
                    } as React.CSSProperties
                }
            >
                <AppSidebar variant="inset" />
                <SidebarInset>
                    <SiteHeader title="New Entry"/>
                    <div className="flex flex-1 flex-col">
                        <div className="@container/main flex flex-1 flex-col gap-2">
                            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                                {/*<SectionCards />*/}
                                {/*<div className="px-4 lg:px-6">*/}
                                {/*    <ChartAreaInteractive />*/}
                                {/*</div>*/}
                                <DataTable initialData={parsedData} />
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    )
}
