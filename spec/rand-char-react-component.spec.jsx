import React from 'react/addons';
import RandCharReactComponent from '../lib/rand-char-react-component.jsx';

describe('RandCharReactComponent', function() {
    var component;

    beforeEach(function() {
        component = React.addons.TestUtils.renderIntoDocument(
            <RandCharReactComponent/>
        );
    });

    it('should render', function() {
        expect(React.findDOMNode(component).className).toEqual('rand-char-react-component');
    });

    it('should generate a random character', function() {
        console.log(RandCharReactComponent.randomeCharacter());
    });

});
