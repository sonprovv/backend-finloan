export async function apiClient<T>(
    url: string,
    config: RequestInit = {}
  ): Promise<T> {
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...config.headers,
        },
        ...config,
      })
  
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "API request failed")
      }
  
      return await response.json()
    } catch (error) {
      console.error("API error:", error)
      throw error
    }
  }
  