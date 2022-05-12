import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt="" />
                </a>

                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px;
`;
const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    /* 为弹性容器内的项目指定默认对齐方式。*/
    align-items: center;
    /* position属性指定一个元素（静态的，相对的，绝对或固定）的定位方法的类型。*/
    position: relative;
    /* justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。 */
    /* space-between 均匀排列每个元素 */
    justify-content: space-between;
    /* flex-wrap 属性规定flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。 */
    /* nowrap 默认值。规定灵活的项目不拆行或不拆列。 */
    flex-wrap: nowrap;

& > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
        padding: 0 5px; 
    }
} 
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    border-radius: 4px;

    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    /* transition-duration 规定完成过渡效果需要花费的时间（以秒或毫秒计）*/
    transition-duration: 167ms;
    font-size: 16px;
    /* font-weight 设置文本的粗细 */
    font-weight: 600;
    /* line-height 设置行高 */
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);

    &:hover{
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    }
`;

export default Login;