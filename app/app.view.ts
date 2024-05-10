namespace $.$$ {

	export class $audetv_quest_app extends $.$audetv_quest_app {

		@$mol_mem
		home() {
			return this.yard().world().home()
		}

		@$mol_mem
		user() {
			// айди и персону, а дальше не передаем, т.к. сработают дефолтные права,
			// у владельца полные права, у всех остальных никаких
			return this.home().chief.yoke( '$audetv_quest', $audetv_quest_person )!
		}

	}
}
