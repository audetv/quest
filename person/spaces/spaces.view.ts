namespace $.$$ {

	export class $audetv_quest_person_spaces extends $.$audetv_quest_person_spaces {

		@$mol_mem
		space_list() {
			// берем у передоного в spaces.view.tree person список объектов space`ов
			// и возвращаем список объектов вьюшек
			return this.person().spaces_list().map( obj => this.Space( obj ) )
		}

		space_id( obj: $audetv_quest_space) {
			return obj.head
		}

		space_title( obj: $audetv_quest_space ) {
			return obj.title()
		}
	}
}
