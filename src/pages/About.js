import React from 'react';
import ReactMarkdown from 'react-markdown';

import '../style/Markdown.css';

export default class About extends React.Component {
    constructor () {
        super();
        this.state = {
            markdown: ''
        }
    }

    componentWillMount () {
        console.log(this.props.location)
        let self = this;
        var url = `https://api.github.com/repos/burhanahmeed/reactjs-whatsapp-redirector/contents/README.md`;
        var myRequest = new Request(url, { headers: new Headers({'accept':'application/vnd.github.v3.raw'})});
        fetch(myRequest).then(function(response) {
            if (!response.ok) return "# There was error with your response, please check the details and try again";
                return response.text();
            }
        ).then(function(response) {
            let md = response;
            self.setState({
                markdown: md
            })
        });
    }

    render () {
        return (
            <div className="wrapper">
                <div className="about">
                    <a href="https://github.com/burhanahmeed/reactjs-whatsapp-redirector" target="_blank">
                        Repository to contribute
                    </a>
                    <div className="content-md markdown-body">
                        <ReactMarkdown
                            source={this.state.markdown}
                        ></ReactMarkdown>
                    </div>
                </div>
            </div>
        );
    }
}