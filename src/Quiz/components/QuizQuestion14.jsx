import { useDispatch } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer14 } from '../../store/slices/quizSlice';
import { useForm } from '../../hooks/useForm';

export const QuizQuestion14 = ({ nextPage }) => {

    const { form,  handleChange } = useForm();

    const dispatch = useDispatch();

    const { category, question, description } = findQuestion(questions, 14); // destructuración de las propiedades 'category', 'question', 'description' y 'answers' del objeto que devuelve la función


    const handleSubmit = (ev) => {

        ev.preventDefault();

        const { jardin: answer } = form; // 'value' de la respuesta del usuario (m² del jardín)
        // modifico el nombre de la propiedad para que coincida con el payload del reducer en el slice

        const liters = Number(answer) * 6; // m² * 6 para calcular litros/día

        const pixels = Number(answer) * 6; // m² * 6 para calcular cuántos píxeles sube la ola //! pendiente refact cálculo

        dispatch(setAnswer14({ answer, liters, pixels }));

        nextPage() // avanza a la siguiente pregunta automáticamente

    };


    return (

        <>

            <h2> {question} </h2>

            <p> {description[0]} </p>

            <form
                onSubmit={handleSubmit}
            >

                <input
                    type="number"
                    name={category}
                    placeholder={description[1]}
                    min='0'
                    onChange={handleChange}
                />

                <input
                    type="submit"
                    value="Continuar"
                    disabled={!form ? true : false} // no se habilita el botón continuar hasta que el usuario no introduce un valor
                />

            </form>

        </>

    );

};