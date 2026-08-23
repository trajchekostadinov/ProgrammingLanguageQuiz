import { ref } from 'vue'

// Демонстрација на API повик кон надворешен веб сајт (JokeAPI - бесплатен, без клуч).
// https://jokeapi.dev/
export function useProgrammingFact() {
  const fact = ref('')
  const loading = ref(false)
  const error = ref(null)

  async function fetchFact() {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(
        'https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode'
      )
      if (!res.ok) throw new Error('Не успеа повикот кон API-то')
      const data = await res.json()
      fact.value = data.joke || 'Знаеше ли дека дебагирање зазема повеќе време од пишување код?'
    } catch (e) {
      error.value = e.message
      fact.value = 'Не успеа вчитување на факт од надворешниот сервис. Обиди се повторно.'
    } finally {
      loading.value = false
    }
  }

  return { fact, loading, error, fetchFact }
}
