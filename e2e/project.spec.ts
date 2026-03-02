import { test, expect } from '@playwright/test'

test('should create a project', async ({ page }) => {
	await page.goto('http://localhost:3000/dashboard/projects')
	await page.getByRole('button', { name: 'New Project' }).click()
	await expect(page).toHaveURL(
		'http://localhost:3000/dashboard/projects/create',
	)
})
