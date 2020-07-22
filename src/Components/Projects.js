import React from 'react'

const Projects = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center ">
                    <div className="bg-dark p-3">
                        <img src={require('../Media/SL.png')} width="80%" height="250" alt="" />
                    </div>
                    <div className="title  text-secondary">
                        <b>BMO SENSITIVE LEAVE ASSIGNMENT</b>
                        <p>SL application is developed to determine the business units, roles and employees on sensitive positions,
                            and keep track of their leaves, yearly analysis and report generation as well as alerting the management.
                            I worked as a developer with a business analyst and a Sr. manager in the team. 
                            The application is based on ASP.Net MVC, Entity Framework, MS SQL Server and JavaScript.  
                         </p>
                    </div>
                </div>
                <div className="col-md-6 text-center ">
                    <div className="bg-dark p-3">
                        <img src={require('../Media/JaynesCottages.png')} width="80%" height="250" alt=""  />
                    </div>
                    <div className="title  text-secondary">
                        <b>JAYNES COTTAGES</b>
                        <p> Jayne's Cottages, property management company for cottage rentals in the Muskoka, Ontario.
                            I worked in a team of three developers which was coordinated by our manager. The application was built in
                            ASP.Net MVC, Entity Framework, bootstrap, MS SQL Server , JavaScript and also made use of existing open API's like Vreasy. 
                         </p>
                    </div>

                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-6 text-center ">
                    <div className="bg-dark p-3">
                        <img src={require('../Media/WBQuote.png')} width="80%" height="250" alt=""  />
                    </div>
                    <div className="title  text-secondary">
                        <b>WB Quote</b>
                        <p>WB Quote provides current insurance plans and rates to licensed brokers for their clients in the US.
                            I worked as a junior developer in the team of four (other members - sr. developer, technical lead, quality analyst).
                            The application is based on C#, ASP.Net MVC, KnockoutJs, AngularJs, bootstrap, Web API, Entity Framework, MS SQL Server.  
                         </p>
                    </div>
                </div>
                <div className="col-md-6 text-center ">
                    <div className="bg-dark p-3">
                        <img src={require('../Media/mHSEQ.png')} width="80%" height="250" alt=""  />
                    </div>
                    <div className="title  text-secondary">
                        <b>OCEAN MANAGER</b>
                        <p> Ocean manager allows shipping companies to manage, control and review their HSEQ processes and 
                            synchronized their data between ship and shore. I was thrown into the small team and did my best
                            to make all the enhancements to the product as well as provide support to ship/ shore members 
                            on daily basis. The product is based on ASP.Net Web forms, C#, VB, Jquery, bootstrap, MS SQL Server
                            and Web Services. 
                         </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects