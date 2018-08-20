import React from 'react';
import { Query } from 'react-apollo';
import { getPageNameQuery } from '../graphql';

const Header = () => (
    <Query query={getPageNameQuery}>
        {({ loading, error, data }) => {
            if (error) return <h1>Error...</h1>;
            if (loading || !data) return <h1>Loading...</h1>;

            return <h1>{data.apolloClientDemo.currentPageName}</h1>
        }}
    </Query>
);

export default Header;
