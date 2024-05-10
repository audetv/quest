namespace $ {

	export class $audetv_quest_person extends $hyoo_crowd_struct {

		@$mol_mem
		name( next?: string ) {
			return this.sub( 'name', $hyoo_crowd_reg ).str( next ) ?? "Аноним"
		}

		// @$mol_mem
		// avatar( next?: string ) {
		// 	return this.sub( 'avatar', $hyoo_crowd_reg ).str( next )
		// }

	}

}
