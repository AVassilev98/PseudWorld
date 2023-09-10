import React from "react";
import "./PageBrowser.scss"

type PageBrowserState = {
    currentPage: number
    maxPage: number
}

class PageBrowser extends React.Component<{}, PageBrowserState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            currentPage: 37,
            maxPage: 100
        };
        this.changePage = this.changePage.bind(this);
    }

    changePage(toPage: number) {
        this.setState({ currentPage: toPage })
    }

    addPage(selectablepages: Array<any>, page: number) {
        const textDecoration: string = page === this.state.currentPage ? "underline" : "none";
        selectablepages.push(<div style={{ textDecoration: textDecoration }} className="clickable pageSelectionElement">
            {page + 1}
        </div>)
    }

    render() {
        let selectablepages: Array<any> = [];
        let pagesProcessed = 0
        let curPageProcessing = 0;
        const numSlots = 13;
        const lookLen = 3;


        // case 1: our pages fit in the number of available slots
        if (this.state.maxPage < numSlots) {
            for (let i = 0; i < numSlots; i++) {
                this.addPage(selectablepages, i);
            }
            return;
        }


        let firstRangeLen;
        let secondRangeLen;
        let thirdRangeLen;
        let hitsLeftEdge: boolean = false
        let hitsRightEdge: boolean = false

        if (this.state.currentPage < 2 * lookLen) {
            firstRangeLen = 9;
            hitsLeftEdge = true
        }
        else {
            firstRangeLen = 3;
        }
        if (this.state.currentPage >= this.state.maxPage - 2 * lookLen) {
            thirdRangeLen = 9;
            hitsRightEdge = true;
        }
        else {
            thirdRangeLen = 3;
        }

        for (let i = 0; i < firstRangeLen; i++) {
            this.addPage(selectablepages, i);
        }
        if (!hitsLeftEdge) {
            selectablepages.push(<input type="text" pattern="[0-9]+" placeholder="..." className="pageSelectorText clickable" />)
        }
        if (!hitsLeftEdge && !hitsRightEdge) {
            for (let i = this.state.currentPage - 2; i <= this.state.currentPage + 2; i++) {
                this.addPage(selectablepages, i);
            }
        }
        if (!hitsRightEdge) {
            selectablepages.push(<input type="text" pattern="[0-9]+" placeholder="..." className="pageSelectorText clickable" />)
        }
        for (let i = this.state.maxPage - thirdRangeLen; i < this.state.maxPage; i++) {
            this.addPage(selectablepages, i);
        }

        return (
            <div className="pageSelectorContainer">
                <a>[ </a>
                {selectablepages}
                <a> ]</a>
            </div>
        )
    }
}

export default PageBrowser