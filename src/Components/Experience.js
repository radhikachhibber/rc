import React from 'react'

const Experience = () => {
    return (
        <div className="container">
            <div className="divContent text-center container">
                <article>
                    <content>
                        <div className="container">
                            <div className="col-md-12 col-xs-12"><img src={require('../Media/BMO.jpg')} width="60" height="60" />
                            </div><br />
                            <div className="col-md-12 col-xs-12"><h5>BMO FINANCIAL GROUP - TORONTO, ONTARIO</h5>
                                <div>SOFTWARE DEVELOPER  (June 2019 - April 2020)
                                <p>- Developed web based and ETL type applications using Microsoft technologies</p>
                                </div>
                            </div>
                        </div>
                    </content>
                </article>
            </div>
            <div className="divContent text-center container">
                <article>
                    <content>
                        <div className="container">
                            <div className="col-md-12 text-center"><img src={require('../Media/georgian.jpg')} width="60" height="60" />
                            </div><br />
                            <div className="col-md-12 text-center"><h5>GEORGIAN COLLEGE - BARRIE, ONTARIO</h5>
                                <div>SOFTWARE DEVELOPER  (January 2019 - June 2019)
                                   <p> - From scratch designing and development of ecommerce based application using ASP.Net MVC and SQL Server.</p>
                                </div>
                            </div>
                        </div>
                    </content>
                </article>
            </div>
            <div className="divContent text-center container">
                <article>
                    <content>
                        <div className="container">
                            <div className="col-md-12"><img src={require('../Media/Infosys.jpg')} width="60" height="60" className="divborder"  />
                            </div><br />
                            <div className="col-md-12"><h5>INFOSYS LIMITED - CHANDIGARH, INDIA </h5>
                                <div>TECHNOLOGY ANALYST (June 2017 - April-2018)
                                    <p>- Worked on variety of projects for different clients using Microsoft technologies</p>
                                </div>
                            </div>
                        </div>
                    </content>
                </article>
            </div>
            <div className="divContent text-center container">
                <article>
                    <content>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12"><img src={require('../Media/safaltek.png')} width="60" height="60"  className="divborder"/>
                                </div><br />
                                <div className="col-md-12"><h5>SAFALTEK SOFTWARE PVT. LTD. - CHANDIGARH, INDIA</h5>
                                    <div>SOFTWARE DEVELOPER (January 2015 - April-2017)
                                    <p>- Enahancements and development of the marine based product used by clients worldwide and providing support at the same time.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </content>
                </article>
            </div>
        </div>
    )
}
export default Experience