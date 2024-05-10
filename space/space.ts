namespace $ {

	export class $audetv_quest_space extends $hyoo_crowd_struct {

		/**
		 * Изменение или получение имени. Геттеросеттер.
		 * @param next имя
		 * @returns 
		 */
		@$mol_mem
		title( next?: string ) {
			return this.sub( 'title', $hyoo_crowd_reg ).str( next ) || "Без названия"
		}

		@$mol_mem
		tasks_node() {
			return this.sub( 'tasks', $hyoo_crowd_list )
		}

		@$mol_mem
		tasks_list( next?: $audetv_quest_task[] ) {
			return this.tasks_node().nodes( $audetv_quest_task )
		}

		/**
		 * Добавление задачи.
		 */
		@$mol_action
		task_add() {
			this.sub( 'tasks', $hyoo_crowd_list ).insert( [ {} ] )
			return this.tasks_list().slice( -1 )[0]
		}

		/**
		 * Удаление задачи.
		 */
		@$mol_action
		task_drop( obj: $audetv_quest_task ) {
			// Находим индекс задачи и отправляем его на удаление
			const index = this.tasks_list().indexOf( obj )
			this.sub( 'tasks', $hyoo_crowd_list ).cut( index )
		}
	}

}
