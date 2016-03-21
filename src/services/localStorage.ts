namespace app.service {
    import todoAppl = my.app.todoAppl;
    export interface ILocalStorage<T> {
        save(data: T): void;
        load(): T;
    }

    class LocalStorage<T> implements ILocalStorage<T> {

        save(data: T):void {
            localStorage['tasks'] = JSON.stringify(data);
        }

        load(): T {
            let data = localStorage['tasks'];
            if( data && data.length > 0 )
                return <T>JSON.parse(data);
            else
                return null;
        }
    }

    todoAppl.service('localStorage', LocalStorage);
}