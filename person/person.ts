namespace $ {

	export class $audetv_quest_person extends $audetv_quest_entity {

		@$mol_mem
		name( next?: string ) {
			return this.state().sub( 'title', $hyoo_crowd_reg ).str( next )
		}

		@$mol_mem
		avatar( next?: string ) {
			return this.state().sub( 'avatar', $hyoo_crowd_reg ).str( next )
		}

	}

}
