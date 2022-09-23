import styled from "styled-components";

const Nav = styled.nav`
    width: 100%;
    min-height: 400px;
    margin-top: 20px;
    ul {
        width: 100%;
        margin: 5px 0;
        list-style: none;
        overflow: none;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    ul li {
        background-color: rgb(46,175,178);
        margin: 10px;
        padding: 15px 15px;
        font-size: 14px;
        width: 60%;
        border-radius: 5px;
        color: #fff;
        letter-spacing: 1.2px;
        cursor: pointer;
        background-color: rgb(45,179,162);
    }
    ul li i {
        margin: 0 10px;
    }
    ul li:nth-child(1) {
        background-color: #F0F2F5;
        color: black;
        position: relative;
        left: 20px;
        width: 200px;
    }
    ul li:nth-child(1) i {
        color: #FF6D22;
    }
`
export default Nav;
