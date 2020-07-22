import React, { Component } from 'react'

class Skills extends Component {
    constructor() {
        super();
        this.skills = [
            {
                name: "ASP.NET MVC/WEB FORMS",
                level: "80"
            },
            {
                name: "MS SQL Server",
                level: "70"
            },
            {
                name: "Entity Framework",
                level: "70"
            },
            {
                name: "C#",
                level: "80"
            },
            {
                name: "LINQ",
                level: "70"
            },
            {
                name: "Web API",
                level: "60"
            },
            {
                name: ".Net Core",
                level: "60"
            },
            {
                name: "JQuery",
                level: "70"
            },
            {
                name: "JavaScript",
                level: "60"
            },
            {
                name: "HTML",
                level: "60"
            },
            {
                name: "BootStrap",
                level: "60"
            },
            {
                name: "ReactJs",
                level: "50"
            },

        ]
    }

    render() {
        return (
            <div className="divContent text-center container">
                <article>
                    <content>
                        <div className="container">
                            {
                                this.skills.map((item) =>
                                    <div className="row">
                                        <div class="col-md-4">{item.name}</div>
                                        <div class="col-md-8"><Progress done={item.level}></Progress></div>
                                    </div>
                                )
                            }
                        </div>
                    </content>
                </article>
            </div>
        )
    }
}
const Progress = ({ done }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    }, 200);

    return (
        <div className="progress">
            <div className="progress-done" style={style}>
                {done}%
			</div>
        </div>
    )
}
export default Skills