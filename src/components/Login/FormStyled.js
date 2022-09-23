import styled from "styled-components";

const Forms = styled.form`
    width: 40%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;

    .container-login {
        padding: 10px;
    }
    h1{
        margin-top: 50px;
        text-align: center;
    }
    .container-login {
        width: 70%;
        height: 200px;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
    }
    .container-login h2 {
        color: #A9A9A9;
        font-size: 20px;
        margin: 10px 0;
    }
    .container-login span {
        color: #FF6D22;
        text-align: left;
    }
    .containe-input {
        display: flex;
        flex-direction: column;
    }
    .input-container-password {
        width: 100%;
        position: relative;
    }
    .input-container-password i {
        position: absolute;
        top: 18px;
        right: 1px;
        color: #DCDCDC;
    }
    .containe-input input {
        width: 100%;
        margin: 5px 0;
        padding: 10px;
        border: 1px solid #DCDCDC;
        font-size: 15px;
        border-radius: 5px;
    }
    .button {
        text-decoration: none;
        text-align: center;
        background-color: rgb(45,179,162);
        border: none;
        border-radius: 5px;
        color: #fff;
        margin-top: 10px;
        width: 120px;
        padding: 10px 0;
        cursor: pointer;
        font-weight: bold;
    }
`
export default Forms;