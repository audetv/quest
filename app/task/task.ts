namespace $ {
	export class audetv_quest_task extends $hyoo_crowd_struct {

		@$mol_mem
		title( next?: string ) {
			return this.sub( 'title', $hyoo_crowd_reg ).str( next )
		}
	}
}
