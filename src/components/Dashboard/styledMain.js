import styled from "styled-components";

const Mains = styled.main`
    width: 1400px;
    margin-left: 20px;
    min-height: 100%;
    background-color: #EFF1F4;
    
    .container-info-user {
        padding: 30px;
        border-bottom: 2px solid #DCDCDC;
    }
    .container-info-user p {
        color: #A9A9A9;
        font-size: 20px;
    }
    .container-info-user span {
        font-weight: bold;
    }
    .gallery-cards {
        width: 1400px;
        min-height: 500px;
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    
    }
    .card {
        width: 29%;
        min-height: 180px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 1px 3px #DCDCDC;
        padding: 20px;
        margin: 10px 0;
    }
    .card__img {
        width: 100%;
        height: 150px;
        background-color: black;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
    }
    .info-time-post {
        color: #fff;
        position: absolute;
        background-color: rgba(0,0,0,.4);
        padding: 5px 10px;
        right: 10px;
        top: 10px;
        text-align: center;
        border-radius: 5px;
    }
    .info-time-post i {
        margin-right: 20px;
    }
    .info-time-post span {
        margin-right: 10px;
    }
    .card__img img {
        width: 100%;
        height: 100%;
    }

    .content-info {
        width: 100%;
        margin-top: 20px;
    }
    .content-info h2 {
        font-size: 20px;
        margin-bottom: 5px;
    }
    .content-info p {
        font-size: 15px;
        color: #A9A9A9;
    }
    
`
export default Mains;