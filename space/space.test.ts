namespace $ {

	async function make_land( id = '1_1' as $mol_int62_string ) {
		return $hyoo_crowd_land.make( {
			id: $mol_const( id ),
			peer: $mol_const( await $hyoo_crowd_peer.generate() ),
		} )
	}

	$mol_test( {

		async 'title channging'() {

			const land = await make_land()
			const space = land.chief.as( $audetv_quest_space )

			$mol_assert_equal( space.title(), 'Без названия' )

			space.title( 'Новое название' )
			$mol_assert_equal( space.title(), 'Новое название' )
		},

		async 'task adding'() {

			const land = await make_land()
			const space = land.chief.as( $audetv_quest_space )

			$mol_assert_equal( space.tasks_list().length, 0 )

			const task = space.task_add()
			$mol_assert_equal( space.tasks_list(), [ task ] )

			space.task_drop( task )
			$mol_assert_equal(space.tasks_list(), [])
		}

	} )
}
