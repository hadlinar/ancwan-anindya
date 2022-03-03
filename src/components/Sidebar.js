import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import data from '../data'

const Nav = styled.div`
    background: pink;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const SidebarNav = styled.div`
    background: yellow;
    width: 357px;
    height: 2147px;
    display: flex;
    justify-content: center;
    top: 0;
`

const SidebarWrap = styled.div`
    width: 100%;
`

const SidebarLink = styled.div`
    display: flex;
    color: red;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 100px;
    font-size: 16px;
    text-align: left;
    padding: 16px 23px 16px 23px;

    &:hover {
        background: brown;
    }

    &:active {
        background: brown;
        border-left: 8px solid #3A7AE3;
        cursor: pointer;
    }
`

const SidebarLabel = styled.span`
`

const Sidebar = () => {

    return (
        <>
            <SidebarNav>
                <SidebarWrap>
                    {
                        data.import_vpti.map((e, i) => {
                            return (
                                <SidebarLink>
                                    <div>
                                        <SidebarLabel>
                                            {e.tab_title}
                                        </SidebarLabel>
                                    </div>
                                </SidebarLink>
                            )
                        })
                    }
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default Sidebar
