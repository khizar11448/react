function Intro2(props) {
    return (
        <div className="blog-post-intro">
            <h2>Why I love front-end web development,{props.firstname}</h2>
            <div>
                <p>In this blog post, I'll list 10 reasons why I love to work as a front-end developer.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro2;