namespace $ {
	export class $audetv_quest_task extends $hyoo_crowd_struct {

		@$mol_mem
		title( next?: string ) {
			return this.sub( 'title', $hyoo_crowd_reg ).str( next )
		}

		/**
		 * Состояние задачи — выполнено, да или нет
		 */
		@$mol_mem
		done( next?: boolean ) {
			// Создаем свойство для хранения состояния task,
			// которое будет называться done
			return this.sub( 'done', $hyoo_crowd_reg ).bool( next )
		}

		/**
		 * Владелец, к кому эта задача привязана.
		 */
		@$mol_mem
		owner( next?: $audetv_quest_person ) {
			// person будет хранится в своем land, поэтому тут просто сохраняем ID персоны
			// id храняиться в поле head
			const str = this.sub( 'owner', $hyoo_crowd_text ).str( next && next.head )
			// преобразовываем в ID
			const id = $mol_int62_string_ensure( str )
			// нужно получть world из world`а Found, из found`а экземпляр персоны
			return id ? this.world()?.Fund( $audetv_quest_person ).Item( id ) : null

		}

		/**
		 * Исполнитель, кому эта задача назначена.
		 */
		@$mol_mem
		executor( next?: $audetv_quest_person ) {
			const str = this.sub( 'executor', $hyoo_crowd_text ).str( next && next.head )
			const id = $mol_int62_string_ensure( str )
			return id ? this.world()?.Fund( $audetv_quest_person ).Item( id ) : null
		}
	}
}
