namespace $.$$ {

	export class $audetv_quest_app extends $.$audetv_quest_app {

		space_opened() {
			return this.$.$mol_state_arg.value( 'space' )
		}

		space() {
			const fund = this.yard().world().Fund( $audetv_quest_space )
			return fund.Item( this.space_opened() as $mol_int62_string )
		}

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

		pages() {
			return [
				this.Spaces(),
				... this.space_opened() ? [ this.Tasks() ] : [],
			]
		}

	}
}
