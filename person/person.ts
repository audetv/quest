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

		@$mol_mem
		spaces_node() {
			return this.sub( 'spaces', $hyoo_crowd_list )
		}

		@$mol_mem
		space_fund() {
			return this.world()!.Fund( $audetv_quest_space )
		}

		// список spaces
		@$mol_mem
		spaces_list() {
			// достаем список айдишников
			const ids = this.spaces_node().list()
			// проверяем, что айдишники, что не айдишники отсекаем
			// и из оставшихся айдишников создаем инстансы класса space
			return ids
				.map( id => $mol_int62_string_ensure( id ) )
				.filter( $mol_guard_defined )
				.map( id => this.space_fund()!.Item( id ) )
		}

		// добавляем space
		@$mol_action
		space_add() {
			return this.space_fund().make()
		}

		// удаляем space
		@$mol_action
		space_drop( obj: $audetv_quest_space) {
			this.spaces_node().drop( obj.head )
		}

	}

}
