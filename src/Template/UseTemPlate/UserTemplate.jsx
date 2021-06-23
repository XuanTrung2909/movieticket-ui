import React, { Fragment } from 'react'
import { Route } from 'react-router'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

export default function UserTemplate(props) {
    return (
        <Fragment>
            <Header />
            <Route path={props.path} exact render={(propsRoute) => {
                return (
                    <Fragment>
                        <props.component {...propsRoute} />
                    </Fragment>
                )
            }} />
            <Footer />
        </Fragment>
    )
}
