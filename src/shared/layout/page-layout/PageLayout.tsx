import PageLayoutStyles from './PageLayout.module.css'
import type React from "react"

interface IPageLayoutProps {
    title: string
    children: React.ReactNode
}

export const PageLayout = ({ children, title }: IPageLayoutProps) => {
    return (
        <div className={PageLayoutStyles.PageLayoutContainer}>
            <div className={PageLayoutStyles.PageContent}>
                <div>
                    <h1 className={PageLayoutStyles.PageTitle}>{title}</h1>
                </div>

                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}