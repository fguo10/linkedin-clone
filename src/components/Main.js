
import styled from 'styled-components'

const Main = (props) => {
    return (
        <Container>
            <ShareBox>
                <div>
                    <img src='/images/user.svg' alt='' />
                    <button>Start a post</button>
                </div>

                <div>
                    <button>
                        <img src='/images/photo-icon.svg' alt='' />
                        <span>Photo</span>
                    </button>

                    <button>
                        <img src='/images/video-icon.svg' alt='' />
                        <span>Video</span>
                    </button>

                    <button>
                        <img src='/images/event-icon.svg' alt='' />
                        <span>Event</span>
                    </button>

                    <button>
                        <img src='/images/article-icon.svg' alt='' />
                        <span>Write article</span>
                    </button>
                </div>
            </ShareBox>


            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src='/images/user.svg' alt='' />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src='/images/ellipses.svg' alt='' />
                        </button>
                    </SharedActor>

                    <Description>
                        Description
                    </Description>
                    <SharedImage>
                        <a>
                            <img src='/images/shared-image.jpg' alt='' />
                        </a>
                    </SharedImage>

                    <SocialCount>
                        <li>
                            <button>
                                <img src="/images/linkedin-like-icon.svg" alt="" />
                                <img
                                    src="/images/linkedin-love-icon.svg"
                                    alt=""
                                />
                                <img
                                    src="/images/linkedin-clap-icon.svg"
                                    alt=""
                                />
                                <span>143</span>
                            </button>
                        </li>
                        <li>
                            <a>34 comments</a>
                        </li>
                    </SocialCount>

                    <SocialActions>
                        <button>
                            <img src="/images/like-icon.svg" alt="" />
                            <span>Like</span>
                        </button>

                        <button>
                            <img src="/images/comment-icon.svg" alt="" />
                            <span>Comment</span>
                        </button>

                        <button>
                            <img src="/images/share-icon.svg" alt="" />
                            <span>Share</span>
                        </button>

                        <button>
                            <img src="/images/send-icon.svg" alt="" />
                            <span>Send</span>
                        </button>
                    </SocialActions>
                </Article>
            </div>

        </Container>
    )
}


const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 0 0 1px rgb(0 0 0 / 15%);
`;


const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white;

    div {
        button {
            outline: none;
            padding-left: auto;
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            font-family:SF Pro Display;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
            padding-left: 15px;
        }
        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0 16px;

            img {
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button {
                margin: 4px 0 0 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16;
                border: 1px solid rgba(0, 0, 0, 0.15);
                background-color: white;
                text-align: left;
            }
        }

    &:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-bottom: 4px;
        padding-top: 4px;

        button {
            img {
                margin: 0 4px 0 -2px;
                width: 25px;
                height: 25px;
            }
            span {
                color: #70b5f9;
            }
        }
    }
    }
`;

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;


const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;

    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img {
            width: 48px;
            height: 48px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;

            span {
                text-align: left;

                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }

                &:nth-child(n+1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }

            }
        }
    }

button{
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
}

`;

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;

`;



const SharedImage = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;

    img {
        /* 缩放替换后的内容以保持其纵横比 */
        object-fit: contain;
        width: 100%;
        height: 100%;


    }
`;


const SocialCount = styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;
    list-style: none;

    button {
        align-items: center;
        background-color: transparent;
        border: none;
    }

    li {
        margin-right: 5px;
        font-size: 13px;
        button {
            display: flex;
        }
        img {
            width: 20px;
        }
    }
`;


const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0;
    min-height: 40px;
    padding: 4px 70px 8px 9px;

    button {
        display: inline-flex;
        align-items: center;
        /* color: #0a66c2; */
        color: 	＃D3D3D3;
        width: 50px;
        height: 50px;
        background-color: transparent;
        border: none;
        img {
            width:  25px;
            height: 25px;
        }
        @media (min-width: 768px) {
            span {
                margin-left: 8px;
            }
            a {
                margin-left: 8px;
            }
        }
    }
`;

export default Main;