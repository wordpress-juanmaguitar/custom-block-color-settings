// Import stylesheets.
import './style.scss';

// Import dependencies.
import { registerBlockType } from '@wordpress/blocks';
import blockEdit             from './edit/';
import blockSave             from './save';
import blockMetaData             from './block.json';

// Register block type.
registerBlockType( blockMetaData, {
	edit: blockEdit,
	save: blockSave
} );
