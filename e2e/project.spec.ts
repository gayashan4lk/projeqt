import { test, expect } from '@playwright/test'

test('should create a project', async ({ page }) => {
	await page.goto('http://localhost:3000/dashboard/projects')
	await page.getByRole('button', { name: 'New Project' }).click()
	await page.getByRole('textbox', { name: 'Name' }).click()
	await page.getByRole('textbox', { name: 'Name' }).fill('Test Project 1')
	await page.getByRole('textbox', { name: 'Description' }).click()
	await page
		.getByRole('textbox', { name: 'Description' })
		.fill('Test Project 1')
	await page.getByTestId('startDate').click()
	await page.getByRole('button', { name: 'Sunday, March 1st,' }).click()
	await page
		.getByRole('button', { name: 'Sunday, March 1st, 2026,' })
		.press('Escape')
	await page.getByTestId('deliveryDate').click()
	await page
		.getByRole('button', { name: 'Tuesday, March 31st,' })
		.nth(1)
		.click()
	await page
		.getByRole('button', { name: 'Tuesday, March 31st, 2026,' })
		.press('Escape')
	await page.getByRole('combobox', { name: 'Status' }).click()
	await page.getByRole('option', { name: 'On Track' }).click()
	await page.getByRole('button', { name: 'Submit' }).click()
	await page.getByRole('link').filter({ hasText: /^$/ }).first().click()
	await expect(
		page.getByRole('heading', { name: 'Test Project' }),
	).toBeVisible()
})
