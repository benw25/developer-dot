import React from 'react';
import ApiConsoleWrapper from './ApiConsoleWrapper';

const SampleConsoles = ({apiEndpoints, onAddItemToPostbodyCollection, onConsoleVisibilityToggle, onFillConsoleSampleData, onPathParamChanged, onPostBodyInputChanged, onQueryParamChanged, onRemovePostbodyCollectionItem, onResetConsole, onSubmitConsoleRequest}) => {
    return (
        <div>
            {apiEndpoints.map((endpoint, i) => (
                <ApiConsoleWrapper endpoint={endpoint} id={i} key={i} onAddItemToPostbodyCollection={onAddItemToPostbodyCollection} onConsoleVisibilityToggle={onConsoleVisibilityToggle} onFillConsoleSampleData={onFillConsoleSampleData} onPathParamChanged={onPathParamChanged} onPostBodyInputChanged={onPostBodyInputChanged} onQueryParamChanged={onQueryParamChanged} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} onResetConsole={onResetConsole} onSubmitConsoleRequest={onSubmitConsoleRequest} />
                )
            )}
        </div>
    );
};

SampleConsoles.displayName = 'Sample API Consoles';
SampleConsoles.propTypes = {
    apiEndpoints: React.PropTypes.array.isRequired,
    onAddItemToPostbodyCollection: React.PropTypes.func.isRequired,
    onConsoleVisibilityToggle: React.PropTypes.func.isRequired,
    onFillConsoleSampleData: React.PropTypes.func.isRequired,
    onPathParamChanged: React.PropTypes.func.isRequired,
    onPostBodyInputChanged: React.PropTypes.func.isRequired,
    onQueryParamChanged: React.PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: React.PropTypes.func.isRequired,
    onResetConsole: React.PropTypes.func.isRequired,
    onSubmitConsoleRequest: React.PropTypes.func.isRequired
};

export default SampleConsoles;
